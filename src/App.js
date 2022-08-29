import "./App.css";
import Header from "./components/Header";
import logo from "./assets/page-header.png";
import Contact from "./components/Contact";
import Body from "./components/body";
import About from "./components/about";

function App() {
  return (
    <div className="App w-screen">
      <div id="home" className="shadow-xl border-t scroll-smooth">
        <Header />
        <div className="w-screen">
          <Body />
          <div className="py-12">
            <div className="bg-gray-200 h-4"></div>
          </div>
          <div className="relative flex py-5 items-center">
            <div id="about" className="flex-grow border-t border-blue-400"></div>
            <span className="">
              <img src={logo} className="h-12 w-15" />
            </span>
            <div className="flex-grow border-t border-blue-400"></div>
          </div>
          <About />
          <div className="py-12">
            <div className="bg-gray-200 h-4"></div>
          </div>

          <div className="relative flex py-5 items-center">
            <div id="contact"className="flex-grow border-t border-blue-400"></div>
            <span className="">
              <img src={logo} className="h-12 w-15" />
            </span>
            <div className="flex-grow border-t border-blue-400"></div>
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
