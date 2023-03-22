
import './App.css';
import About from "./About/About";
import Skills from "./Skills/Skills";
import MyWorks from "./MyWorks/MyWorks";
import Contact from "./Contact /Contact";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import Nav from "./Nav/Nav";
import {BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {
  return (
      <BrowserRouter>
          <div className={'App'}>
              <Sidebar/>
              <div className='app-wraper-content'>
                  <Nav/>
                  <Routes>
                      <Route path={'/portfolio'} element={<About/>}/>
                      <Route path='/about' element={<About/>}/>
                      <Route path='/skills' element={<Skills/>}/>
                      <Route path='/myWorks' element={<MyWorks/>}/>
                      <Route path='/footer' element={<Footer/>}/>
                      <Route path='/contact' element={<Contact/>}/>
                  </Routes>
              </div>

          </div>
      </BrowserRouter>
  );
}

export default App;
