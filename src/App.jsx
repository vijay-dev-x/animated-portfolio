import "./mapp.scss";
import Parellax from "./components/Parellex/Parellax";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Service from "./components/services/Service";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <>
      <div className="app-div">
        <Cursor></Cursor>
        <section>
          <Navbar></Navbar>
          <Hero></Hero>
        </section>
        <section id="services">
          <Parellax type="services"></Parellax>
        </section>
        <section>
          <Service></Service>
        </section>

        <section id="portfolio">
          <Parellax type="portfolio"></Parellax>
        </section>

        <Portfolio></Portfolio>
        <section>
          <Contact></Contact>
        </section>
      </div>
    </>
  );
};

export default App;
