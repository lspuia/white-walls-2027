import type { Metadata } from "next";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "Interior Design Hardware & Accessories | White Walls",
  description: "Visit the White Walls showroom in Aizawl, Mizoram for interior design hardware and accessories.",
};

export default function HardwarePage() {
  return (
    <>
      <Header />
      <main style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <section style={{ backgroundColor: "#f0f2f7", paddingTop: "2rem", paddingBottom: "2rem" }}>
          <div className="container">
            <h1 style={{ textAlign: "center" }}>Hardware &amp; Accessories</h1>
          </div>
        </section>

        <div style={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "1.25rem",
          padding: "3rem 1rem",
        }}>
          <div>
            <h2 style={{ marginBottom: "1rem" }}>Visit Our Showroom</h2>
            <address style={{ display: "block", marginBottom: "1rem", lineHeight: 1.5 }}>
              White Walls<br />
              Gr. Floor, Solomon&apos;s Cave,<br />
              Tuikual South,<br />
              Aizawl Mizoram
            </address>
            <a
              href="https://maps.google.com/?q=White+Walls+Aizawl"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0170b9", textDecoration: "underline" }}
            >
              Get Directions
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
