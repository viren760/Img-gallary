import React , { useState } from 'react'
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import '../App.css'


const Background = styled.div`
  width: 158%;
  height: 51%;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
width: 503px;
height: 575px;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #fff;
color: #000;
display: grid;
grid-template-columns: 1fr ;
position: absolute;
border-radius: 10px;
left: 347px;
top:20px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 78%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;


const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  color:white;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const previous=()=>{
    console.log("previous");
}



const Modal = ({image,array, showmodal, setshowmodal}) => {
    // console.log(url);
    console.log(showmodal);
    console.log(array);
    // console.log(key);
    console.log(image)
    const[previous,setPrevious]=useState("null");

    const[url,setUrl]=useState(false);
    const[id,setID]=useState(image.id);

    const searchArryPrevious=()=>{
        // console.log(array,key);
           const index= array.findIndex(ele=>ele?.id===id);
           setPrevious(array[index-1]?.urls.thumb);
           setID(array[index-1]?.id)
           setUrl(true);
    }

    const searchArryNext=()=>{
      const index= array.findIndex(ele=>ele?.id===id);
           setPrevious(array[index+1]?.urls.thumb);
           setID(array[index+1]?.id);
           setUrl(true);
    }


    return (
       <>
        {showmodal ? (
        <Background >

            <ModalWrapper showmodal={showmodal}>
              <ModalImg key={image.id} src={url?previous:image.urls.thumb}  alt='camera' />
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setshowmodal(false)}
              />
               <button className='next btn btn-success'  onClick={searchArryNext}>Next</button>
              <button className='prev btn btn-success'  onClick={searchArryPrevious}> Previous</button>
             
            </ModalWrapper>

        </Background>
      ) : null}
       </>
    )
}

export default Modal
