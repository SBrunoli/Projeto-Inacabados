import { useState } from "react";
import Filters from "./components/Filters/Filters";
import Hero from "./components/Hero/Hero";
import Infos from "./components/Infos/Infos";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import HowItWorks from "./components/HowItWorks/HowItWorks";

function App() {
  const [category, setCategory] = useState("todos");

  return (
    <>
      <Navbar />
      <Hero />
      <Infos />
      <Filters activeCategory={category} handleCategory={setCategory} />
      <Projects activeCategory={category} />
      <HowItWorks />
    </>
  );
}

export default App;
