"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Interior Design", href: "/interior-design-service-aizawl-mizoram" },
  { label: "uPVC Doors & Windows", href: "https://www.viewsmizoram.com", external: true },
  { label: "Hardware & Accessories", href: "/shop-interior-hardware-accessories" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      backgroundColor: "#fff",
      boxShadow: "0 0 2px rgba(0,0,0,0.2)",
      position: "relative",
      zIndex: 10,
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        height: "5rem",
        justifyContent: "space-between",
      }}>
        <Link href="/" style={{ display: "block", width: 125 }}>
          <Image
            src="/images/logo-header.png"
            alt="White Walls Interior Design"
            width={125}
            height={63}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </Link>

        <nav style={{ display: "flex", alignItems: "center" }}>
          <div style={menuOpen ? {
            display: "block",
            position: "fixed",
            right: 0,
            top: "5rem",
            backgroundColor: "#fff",
            boxShadow: "0 0 20px rgba(0,0,0,0.2)",
            height: "calc(100vh - 5rem)",
            overflowY: "auto",
            padding: "1rem",
            zIndex: 100,
          } : {}} className="mainMenu">
            <ul style={{ display: "flex", flexDirection: "column" }} className="mainMenuList">
              {navLinks.map((link) =>
                link.external ? (
                  <li key={link.href} style={{ marginTop: "0.5rem" }}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.href} style={{ marginTop: "0.5rem" }}>
                    <Link href={link.href} onClick={() => setMenuOpen(false)}>
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <button
            className="menuToggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              height: 24,
              marginLeft: "1rem",
              position: "relative",
              width: "2rem",
              padding: 0,
            }}
          >
            <span style={{
              backgroundColor: "#0170b9",
              borderRadius: 1,
              display: "block",
              height: 4,
              left: 0,
              position: "absolute",
              width: "100%",
              top: 0,
              transform: menuOpen ? "rotate(-45deg) translateY(10px)" : undefined,
              transformOrigin: "center",
              transition: "transform 0.2s",
            }} />
            <span style={{
              backgroundColor: "#0170b9",
              borderRadius: 1,
              display: menuOpen ? "none" : "block",
              height: 4,
              left: 0,
              position: "absolute",
              width: "100%",
              top: "50%",
              marginTop: -2,
            }} />
            <span style={{
              backgroundColor: "#0170b9",
              borderRadius: 1,
              display: "block",
              height: 4,
              left: 0,
              position: "absolute",
              width: "100%",
              bottom: 0,
              transform: menuOpen ? "rotate(45deg) translateY(-10px)" : undefined,
              transformOrigin: "center",
              transition: "transform 0.2s",
            }} />
          </button>
        </nav>
      </div>

      <style>{`
        @media (min-width: 920px) {
          .menuToggle { display: none !important; }
          .mainMenu {
            display: block !important;
            position: static !important;
            box-shadow: none !important;
            height: auto !important;
            overflow: visible !important;
            padding: 0 !important;
            background: transparent !important;
          }
          .mainMenuList {
            flex-direction: row !important;
            margin-right: 2rem;
          }
          .mainMenuList li {
            margin-top: 0 !important;
            margin-left: 1rem;
          }
          .mainMenuList li:first-child {
            margin-left: 0;
          }
          .mainMenuList a {
            background-color: transparent !important;
            line-height: calc(5rem - 1px) !important;
            padding: 0 1rem !important;
            text-decoration: none;
            display: block;
          }
        }
        @media (max-width: 919px) {
          .mainMenu { display: none; }
          .mainMenuList a {
            background-color: #f1f1f1;
            color: inherit;
            line-height: 2rem;
            padding: 0 1rem;
            text-decoration: none;
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
