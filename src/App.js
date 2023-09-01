
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>} />
  <Route path='/skills' element={<Skills/>}/>
  <Route path='/Experience' element={<Experience/>}/>
  <Route path='/portfolio' element={<Portfolio/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
