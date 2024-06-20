import "./App.css";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Slideshow from "./components/HomePage/Slideshow";
import ServiceDetails from "./components/HomePage/ServiceDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Slideshow/>
      <ServiceDetails/>

      
      <Footer/>
    </div>
  );
}

export default App;
