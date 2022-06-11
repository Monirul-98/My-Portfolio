import About from "./components/Home/About/About";
import Header from "./components/Home/Header";
import Projects from "./components/Home/Projects";
import Navbar from "./components/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Projects></Projects>
    </div>
  );
}

export default App;
