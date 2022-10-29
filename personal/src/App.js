import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import './App.css';
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      
      <AppHeader />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>

        </Routes>


      <hr></hr>
      <br></br>
      
      </div>
      <AppFooter />
      </>
  );
}

export default App;

