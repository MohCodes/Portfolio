
import './App.css';
import Header from './Componenets/Header';
import AboutMe from './Componenets/AboutMe'
import Technologies from './Componenets/Technologies';
import Projects from './Componenets/Projects';
import Contact from './Componenets/Contact';
import Footer from './Componenets/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Technologies/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
