import './App.css';
import Header from './components/Header';
import logo from './assets/page-header.png';
import Contact from './components/Contact';
import Body from './components/body';
import About from './components/about';

function App() {
  return (
    <div className="App lg:hidden">
      <div id='home' className='shadow-xl border-t scroll-smooth'>
        <Header />
        <div>
          <Body />
        </div>
      </div>
      <div id='about' className='shadow-xl border-t scroll-smooth'>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-blue-400"></div>
          <span className=""><img src={logo} className='h-12 w-15' /></span>
          <div className="flex-grow border-t border-blue-400"></div>
        </div>
        <div>
          <About />
        </div>
      </div>
      <div className='border-t shadow-xl'>
        <div id='contact' className="relative flex py-5 items-center scroll-smooth">
          <div className="flex-grow border-t border-blue-400"></div>
          <span className=""><img src={logo} className='h-12 w-15' /></span>
          <div className="flex-grow border-t border-blue-400"></div>
        </div>
        <div>
          <Contact />
        </div>
      </div>

    </div>
  );
}

export default App;
