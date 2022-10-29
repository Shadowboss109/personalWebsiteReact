import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Home from "./components/Home";
import About from "./components/About";
import './App.css';

function App() {
  return (
    /*html*/

    <>
      
      <AppHeader />

      <div className="content">

      <About />
      <hr></hr>
      <br></br>
      
      </div>
      <AppFooter />
      </>
  );
}

export default App;
