
import Navbar from './components/navbar';
import Slidebar from './components/slidebar';
import Hero from './components/hero';
import Tabsection from './components/tabsection';
import Middlesection from './components/middlesection';
import Footer from './components/footer';
import FooterSecond from './components/footersecond';
import Subscribe from './components/subscribe';
import Footerlast from './components/footerlast';
import About from './about/page'
import Style from "./styles/globals.module.scss";

export default function Home() {
  return (
    <div className={Style.pageContainer}>
      <Navbar />
      {/* <About/> */}
      <Slidebar />
      <div className={Style.overlappingContainer}>
        <Tabsection />
      </div>
      <Middlesection /> 
      <Footer />
      <FooterSecond /> 
       <Subscribe />
      <Footerlast />
    </div>
  );
}
