"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 260;

/** Cheap probe so we never construct a renderer that three would log and throw on. */
function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * Drifting gold dust motes behind the content column.
 * Purely decorative — skipped entirely under prefers-reduced-motion,
 * which also avoids ever downloading three.js for those visitors.
 */
export default function DustCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!supportsWebGL()) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    void (async () => {
      const THREE = await import("three");
      if (disposed) return;

      const width = el.clientWidth;
      const height = el.clientHeight;
      if (width === 0 || height === 0) return;

      // The dust is decorative; if WebGL is unavailable (disabled, blocklisted
      // GPU, software-rendering headless) three throws — degrade to no dust.
      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      } catch {
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 50);
      camera.position.z = 8;

      const positions = new Float32Array(PARTICLE_COUNT * 3);
      const speeds = new Float32Array(PARTICLE_COUNT);
      const phases = new Float32Array(PARTICLE_COUNT);

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
        speeds[i] = 0.002 + Math.random() * 0.006;
        phases[i] = Math.random() * Math.PI * 2;
      }

      const geometry = new THREE.BufferGeometry();
      const positionAttribute = new THREE.BufferAttribute(positions, 3);
      geometry.setAttribute("position", positionAttribute);

      const material = new THREE.PointsMaterial({
        color: 0xb68235,
        size: 0.05,
        transparent: true,
        opacity: 0.38,
        sizeAttenuation: true,
        depthWrite: false,
      });

      scene.add(new THREE.Points(geometry, material));

      let t = 0;
      let frame = requestAnimationFrame(function tick() {
        t += 0.016;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          positions[i * 3 + 1] += speeds[i];
          positions[i * 3] += Math.sin(t * 0.6 + phases[i]) * 0.0022;
          if (positions[i * 3 + 1] > 7) positions[i * 3 + 1] = -7;
        }
        positionAttribute.needsUpdate = true;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(tick);
      });

      const handleResize = () => {
        const w = el.clientWidth;
        const h = el.clientHeight;
        if (w === 0 || h === 0) return;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", handleResize);

      cleanup = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("resize", handleResize);
        renderer.domElement.remove();
        renderer.dispose();
        geometry.dispose();
        material.dispose();
      };
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return <div ref={containerRef} className="dust" aria-hidden="true" />;
}
