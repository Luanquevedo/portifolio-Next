import Summary from "@/components/summary/summary";
import Skills from "@/components/skills/skills"
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Carousel from "@/components/cards/cards";
import '../styles/globals.scss'; // Mantenha isso para o estilo global
import '../components/summary/index.scss';
import '../components/skills/index.scss';
import '../components/navbar/index.scss';
import '../components/footer/index.scss';
import '../components/cards/index.scss';


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
  