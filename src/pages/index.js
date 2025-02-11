import Summary from "@/components/summary/summary";
import Skills from "@/components/skills/skills"
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Carousel from "@/components/cards/cards";



export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="sumarry">
        <Summary />
      </section>
      <section id="projects">
        <Carousel />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Footer />
      </section>




    </div>
  );
}
