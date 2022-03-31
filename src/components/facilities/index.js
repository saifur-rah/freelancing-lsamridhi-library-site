import React from 'react'
// import img from '../../images/Facilities.png'

import Video1 from '../../videos/library.mp4';

import styled from "styled-components"
const Container= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const Video=styled.video`
width: 100%;
height:50%;
-o-object-fit: cover;
object-fit: cover;
background:#232a34 ;

`
const Content=styled.div`
 display: flex;
  flex-wrap: wrap;
  font-size: 30px;
  text-align: center;
  margin-top: -10vh;

`
const Text1 = styled.div`
 background-color: #f1f1f1;
  padding: 10px;
  flex: 50%;
  @media screen and (max-width:768px){
      flex: 100%;
  }
/* font-size: 1rem;
color: black;
border-radius:1rem;
padding: 0.5rem 1rem;
border: 2px solid black;
background-color: yellow;
&:hover{
    background-color: black;
    color: white;
} */
`
const Text2 =styled.div`
 background-color: dodgerblue;
  padding: 10px;
  flex: 50%;
  @media screen and (max-width:768px){
      flex: 100%;
  }
`

const Facilities = () => {
  return (
    
    <Container>
        <Video autoPlay loop muted src={Video1} type='video/mp4'/>
           
        
        <Content>
          <Text1><>Silent Zone</></Text1>
          <Text2><>Fully AC Reading Room</></Text2>
          <Text1><>Table Light</></Text1>
          <Text2><>High Speed Wifi</></Text2>
          <Text1><>Power Back-up</></Text1>

          <Text2><>Charging Point</></Text2>
          <Text1><>R.O Water</></Text1>
          <Text2><>CCTV Camera</></Text2>
          <Text1><>Comfortable Chair</></Text1>

          <Text2><>NewsPaper</></Text2>
          
        </Content>
    </Container>
  )
}

export default Facilities;