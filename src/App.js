import About from "./component/About/About";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Nav from "./component/Nav/Nav";
import Slider from "./component/Slider/Slider";

function App() {
  return (
    <>
      <header>
        <Nav />
        <Hero />
      </header>
      <main className="pb-20 overflow-x-hidden">
        <About />
        <Slider />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
