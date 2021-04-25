import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius:10px;
  cursor:pointer;
`;


export const UnsplashImage = ({ image, array }) => {
const [showmodal, setshowmodal]= useState(false);
console.log(image);
// const [key,setkey]=useState(null);


const OpenModal=()=>{
    console.log(showmodal );
setshowmodal(prev => !prev);

  }

  return (
    <> 
      <div >
      <Img onClick={OpenModal} key={image.id} src={image.urls.thumb} alt="" />
      <Modal image={image} array={array} showmodal={showmodal} onClick={console.log("hi")} setshowmodal={setshowmodal}/>
      </div> 
    </>
  )
}
