import Image from "next/image";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url(/images/main-bg.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        justifyContent: "center",
        width: "100%",
      }}>
        <div className="container" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 1rem",
        }}>
          <figure style={{ maxWidth: 600, width: "100%" }}>
            <Image
              src="/images/logo-hero.png"
              alt="White Walls, Interior Designer in Aizawl Mizoram"
              width={859}
              height={487}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </figure>
        </div>
      </main>
      <Footer />
    </>
  );
}
