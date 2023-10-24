import About from "./component/About/About";
import Hero from "./component/Hero/Hero";
import Nav from "./component/Nav/Nav";

function App() {
  return (
    <>
      <header>
        <Nav />
        <Hero />
      </header>
      <main>
        <About />
      </main>
    </>
  );
}

export default App;
