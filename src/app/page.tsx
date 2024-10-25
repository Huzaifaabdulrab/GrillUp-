

import Screen from "../app/Web-Components/screen";
import Navbar from "./Web-Components/navbar";
import About from "../app/Web-Components/about";
import Menu from "../app/Web-Components/menuSection";
import Contact from "./Web-Components/Contact";
import SpecialOffer from "../app/Web-Components/offer";
import Footer from "../app/Web-Components/footer";
export default function Home() {
  return (
 <>
 <div className="bg-gray-100">
  <Navbar/>
 <Screen/>
 <About/>
 <Menu/>
 <SpecialOffer/>
 <Contact/>
 <Footer/>
 </div>
 </>
  );
}
