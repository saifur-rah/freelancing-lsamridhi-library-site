import React,{useState} from 'react';
// import {BrowserRouter as Router } from 'react-router-dom';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Reviews from '../components/Reviews';
import SaifComponet from '../components/SaifComponet';
// import Saif from '../components/SaifComponet';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen , setIsOpen] = useState(false);
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection />
    <InfoSection {...homeObjOne}/>
    {/* <Saif/> */}
    <Services/>
     
    <InfoSection {...homeObjTwo}/>
    
    {/* <InfoSection {...homeObjThree}/> */}
    <Reviews/>
    <InfoSection {...homeObjThree}/>
    <Footer/>
    </>
  )
}

export default Home