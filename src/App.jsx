import "./mapp.scss";
import Parellax from "./components/Parellex/Parellax";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Service from "./components/services/Service";
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
