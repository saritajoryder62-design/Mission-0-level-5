import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Cardgrid from "./Components/Cardgrid";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cardgrid />
      </main>
      <Footer />
    </>
  );
}

export default App;
