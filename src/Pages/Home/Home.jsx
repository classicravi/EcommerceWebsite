import React from "react";
import './home.css'; // Your custom styles
import Carousel from "../../Components/Carousel/carousel";
import Categorycard from "../../Components/Categorycard/Categorycard";
import axios from 'axios';
import { useEffect,useState } from 'react';
import Productcard from "../../Components/Productcard";

function Home() {
  const [storeProducts,setStoreProducts] = useState([])
  useEffect(()=>{
    async function getProducts() {
     let k = await axios.get('https://dummyjson.com/products')
     console.log(k.data.products);
     setStoreProducts(k.data.products);
    }
    getProducts();
  },[])
  return (
    <>
      <Carousel />
      <div>
        <h1>Categories</h1>
        <div className='d-flex justify-content-start column-gap-3 flex-wrap'>
              <Categorycard fileName={'food.png'} categoryName={'Food'} />
              <Categorycard fileName={'Clothes.png'} categoryName={'Clothes'}/>
              <Categorycard fileName={'kitchen.png'} categoryName={'Kitchen Appilances'}/>
              <Categorycard fileName={'electronics.png'} categoryName={'Electronics'}/>
        </div>
        <br /><br /><br />
      </div>
      <div>
        <h1>Products</h1>
        <div className="d-flex justify-content-start column-gap-3 row-gap-3 flex-wrap">
        {storeProducts&&storeProducts.length>1&&storeProducts.map(product=>{
           return <Productcard product={product} />
        })}
        </div>
        
      </div>
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
    </>
  );
}

export default Home;
