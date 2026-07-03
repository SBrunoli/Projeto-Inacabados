import Filters from "./components/Filters/Filters";
import Hero from "./components/Hero/Hero";
import Infos from "./components/Infos/Infos";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Infos />
      <Filters />
      <Projects />
    </>
  );
}

export default App;
