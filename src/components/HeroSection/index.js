import React,{useState} from 'react'
import { Button } from '../ButtonElements';
// import Video from '../../videos/library.mp4';
import Video from '../../videos/libraryclear.mp4';
import { HeroBg,HeroContainer,VideoBg,HeroBtnWrapper,HeroContent,HeroH1,HeroP,ArrowForward,ArrowRight } from './HeroElements';
const HeroSection = () => {
    const [hover,setHover]=useState(false);
    const onHover=()=>{
        setHover(!hover);
    }
  return (
    <HeroContainer >
       <HeroBg>
           <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
       </HeroBg>
       <HeroContent>
           <HeroH1>Samridhi Library</HeroH1>
           <HeroP>
               Self Study is the Key to SUCCESS. Samridhi Library is the best Self Study Enviroment Library
           </HeroP>
           <HeroBtnWrapper>
               <Button to= "about" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" >
                   Know More! {hover ? <ArrowForward/>:<ArrowRight/>}
               </Button>
           </HeroBtnWrapper>
       </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection