import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './App.css';
import Service from './Service';
import { productData, responsive } from './data';

function App() {



  const product= productData.map(item => (
<Service name={item.name} url={item.imageurl} price={item.price} description={item.description}/>
  ))








  return (
    <div className="App">
      <h1>React multi carousel</h1>
     <Carousel responsive={responsive}>
  {product}
  
  
</Carousel>
    </div>
  );
}

export default App;
