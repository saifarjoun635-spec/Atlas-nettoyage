import { useEffect, useState } from "react";
import "./App.css";
import { Toaster } from "sonner";
import Header from "./components/atlas/Header";
import Hero from "./components/atlas/Hero";
import Stats from "./components/atlas/Stats";
import Services from "./components/atlas/Services";
import WhyChooseUs from "./components/atlas/WhyChooseUs";
import Process from "./components/atlas/Process";
import Gallery from "./components/atlas/Gallery";
import Testimonials from "./components/atlas/Testimonials";
import Zones from "./components/atlas/Zones";
import FAQ from "./components/atlas/FAQ";
import Contact from "./components/atlas/Contact";
import Footer from "./components/atlas/Footer";
import FloatingActions from "./components/atlas/FloatingActions";

function App() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="App">
      <div
        className="cursor-halo"
        style={{ left: cursor.x, top: cursor.y }}
        aria-hidden="true"
      />
      <Toaster position="bottom-right" richColors />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyChooseUs />
        <Process />
        <Gallery />
        <Testimonials />
        <Zones />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
