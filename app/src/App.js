import "./App.css";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Slideshow from "./components/HomePage/Slideshow";
 import JoinUs from "./components/HomePage/JoinUs";
import ServiceDetails from "./components/HomePage/ServiceDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Slideshow/>
      <JoinUs/>
      <ServiceDetails/>

      <Footer/>
    </div>
  );
}

export default App;
