import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { UnsplashImage } from './components/UnsplashImage';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function App() {
    const [images, setImage] = useState([]);
    const [array,setArray]=useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then(res => {
        setImage([...images, ...res.data]);
        setArray([...res.data]);
      })
  }


  return (
    <div>
      <Navbar/>
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
       
      >
        <WrapperImages>
          {images.map(image => (
            // console.log(image.id)
           <UnsplashImage image={image} array={array}/>
          ))}
        </WrapperImages>
      </InfiniteScroll>
    </div>
  );
}

export default App;
