import Time from "../../time";

import Hero from "../components/hero";
import Footer from "../components/footer";
import Team from "../components/team";
import Navbar from "../components/header";
export default function Home () {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <Hero />
      </div>
      <Time />
      <Footer />
    </div>
  );
}