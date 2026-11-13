import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import OurSpace from "./components/OurSpace";
import HowItWorks from "./components/HowItWorks";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";

// The page is dark at both ends (hero, final call to action) with a light
// "sheet" in between. Each part sets its own theme class; see index.css.
export default function App() {
  return (
    <div className="page theme-dark" id="top">
      <Nav />
      <main>
        <Hero />
        <div className="sheet theme-light">
          <Features />
          <OurSpace />
          <HowItWorks />
          <Faq />
        </div>
        <FinalCta />
      </main>
    </div>
  );
}
