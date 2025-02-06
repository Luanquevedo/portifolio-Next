import Summary from "@/components/summary/summary";
import Skills from "@/components/skills/skills"
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Carousel from "@/components/cards/cards";
import '../styles/globals.scss';

export default function Home() {
    return (
      <div>
        <Navbar/>
        <Summary/>
        <Carousel/>
        <Skills/>
        <Footer/>
      </div>
    );
  }
  