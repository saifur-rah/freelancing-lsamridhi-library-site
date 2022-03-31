import React from 'react'
import Icon1 from '../../images/pamplet.png';
import styled from "styled-components"

const Container =styled.div`
 
display: flex;
justify-items: center;
align-items: center;
flex-direction: row;
padding: 1rem;

@media screen and (max-width=768px) {
    flex-direction: column;
}
`

const ImageWrap = styled.div`
max-width: 50%;
height: 100%;
`
const Image =styled.img`
width:100%;
margin:0 0 10px 0;
padding-right:0;
`
const ContentWrap=styled.div`
width:70vw;
height: 70vw;

`
const Content=styled.div`
 /* margin: 5rem; */
 max-width: 50%;
padding-top: 0;
padding-bottom: 60px;
align-items: center;
justify-content: center;
 
`
const Text =styled.div`

font-size:2rem;
font-style: italic;
font-weight: 400;
border-radius:0.5rem ;
/* border-style:solid; */
border: 2px solid gray;
;

/* padding: 1.5rem 2rem; */
 /* margin: 1rem; */
 transition: all 0.1s ease-in;

text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
 letter-spacing: 0.1rem;

`

const SaifComponet = () => {
  return (
    <>
    <Container  id='discover'>
    
        <ImageWrap>
     <Image src={Icon1}/>
     </ImageWrap>
     
     
      <Content>
      <Text>Silent Zone</Text>
      <Text>Full AC </Text>
      <Text>Wifi</Text>
      <Text>Wifi</Text>
      <Text>Wifi</Text>
      </Content>

    </Container>
    </>
  )
}

export default SaifComponet