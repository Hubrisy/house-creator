import './fonts/style.css'
import './App.css';
import Gallery from './components/gallery/Gallery';
import Header from './components/header/Header';
import Description from './components/description/Descripiton';
import Goals from './components/goals/Goals';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <div className='app_main-container'>
        <div className='app_main-content'>
        <Header />
        {/* <Gallery />
        <Description />
        <Goals />
        <Projects />
        <Contact /> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
