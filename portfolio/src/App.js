import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home"
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
