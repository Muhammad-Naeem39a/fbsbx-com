import './App.css';
import Header from './components/Header';
import logo from './assets/page-header.png';
import Contact from './components/Contact';
import Body from './components/body';


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
        <Body />
        </div>
      </div>
      <div>
        <div id='contact' className="relative flex py-5 shadow-xl items-center scroll-smooth">
          <div className="flex-grow border-t border-blue-400"></div>
          <span className=""><img src={logo} className='h-12 w-15' /></span>
          <div className="flex-grow border-t border-blue-400"></div>
        </div>
        <div className=''>
          <Contact />
        </div>
      </div>
      <div className='bg-black pa-6 shadow-xl'>
          <div className='text-white tracking-tighter'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloribus amet pariatur animi quaerat soluta sapiente exercitationem dicta, praesentium veritatis inventore enim voluptatem! Vitae doloremque voluptatem maxime eum autem quidem.
        </div>
      </div>
    </div>
  );
}

export default App;
