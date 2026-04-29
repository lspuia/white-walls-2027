import type { Metadata } from "next";
import Link from "next/link";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "Interior Design Services in Aizawl, Mizoram | White Walls",
  description: "White Walls is an interior design consultancy based in Aizawl, Mizoram. We provide creative & functional design solutions for residential & commercial projects.",
};

const services = [
  "Interior Space Planning",
  "Interior Decoration",
  "Project Management & Coordination",
  "Electrical Layout",
  "Ceiling Design",
  "Furniture Design & Selection",
  "Kitchen Design",
  "Showrooms & Stores",
  "Office Space Layout & Design",
  "Hardware Selection",
];

export default function InteriorDesignPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ backgroundColor: "#f0f2f7", paddingTop: "2rem", paddingBottom: "2rem" }}>
          <div className="container">
            <h1 style={{ textAlign: "center" }}>
              Interior Design Services<br />
              <span style={{ display: "block", marginTop: "0.25em" }}>in Aizawl, Mizoram</span>
            </h1>
          </div>
        </section>

        <section style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <div className="container">
            <p style={{
              fontSize: "1.25rem",
              textAlign: "center",
              maxWidth: "34em",
              marginLeft: "auto",
              marginRight: "auto",
            }}>
              We are an interior design consultancy based in Aizawl, Mizoram. White Walls has established a reputation for providing creative &amp; functional design solutions for residential &amp; commercial interior design projects.
            </p>
          </div>
        </section>

        <section style={{ paddingTop: 0, paddingBottom: "2rem", textAlign: "center" }}>
          <div className="container">
            <h2 style={{ fontWeight: 700 }}>Interior Design Services that we provide</h2>
            <ul style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "0.5rem",
              maxWidth: "18em",
              textAlign: "left",
            }}>
              {services.map((service) => (
                <li key={service} style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  paddingTop: 5,
                  paddingBottom: 5,
                  fontSize: "1.1rem",
                }}>
                  <span style={{
                    backgroundColor: "#ed1c24",
                    borderRadius: "50%",
                    display: "block",
                    flexShrink: 0,
                    height: 12,
                    marginRight: 8,
                    width: 12,
                  }} />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section style={{ backgroundColor: "#f1f1f1", textAlign: "center", paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div className="container">
            <h2>
              Talk to our designer
            </h2>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#ed1c24",
                color: "#fff",
                display: "inline-block",
                fontSize: "1.5625rem",
                marginTop: "1.25rem",
                padding: "0.75em 1em 0.5em",
                textDecoration: "none",
              }}
            >
              Call Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
