import ChallengesSolve from "./components/ChallengesSolve";
import Client from "./components/Client";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LoveWorking from "./components/LoveWorking";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhyUs />
      <ChallengesSolve />
      <Services />
      <Experience />
      <LoveWorking />
      <Client />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
