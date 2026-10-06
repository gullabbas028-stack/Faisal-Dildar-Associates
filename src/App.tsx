import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Properties from "./components/Properties";
import Services from "./components/Services";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import { WhatsAppIcon } from "./components/SocialIcons";
import { openWhatsApp } from "./lib/site";

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Properties />
        <Services />
        <Quote />
      </main>
      <Footer />

      {/* Floating WhatsApp booking button */}
      <button
        onClick={() =>
          openWhatsApp(
            "Hello Faisaldildar 👋 I'd like to BOOK a property viewing / contact the owner.",
          )
        }
        aria-label="Chat on WhatsApp"
        className="group fixed right-5 bottom-5 z-90 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-sm font-bold text-white shadow-2xl shadow-green-900/30 transition hover:scale-105"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="hidden sm:inline">Book Now</span>
      </button>
    </div>
  );
}
