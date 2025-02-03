import Summary from "@/components/summary/summary";
import Skills from "@/components/skills/skills"
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function Home() {
    return (
      <div>
        <Navbar/>
        <Summary/>
        <Skills/>
        <Footer/>
      </div>
    );
  }
  