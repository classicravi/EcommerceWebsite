import './Product.css';
import { useState, useEffect } from 'react';
import ProductCarosel from '../../Components/ProductCarosel/ProductCarosel';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Product() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log('Line: 10', id);

  useEffect(() => {
    async function productDetails() {
      if (id) {
        let product = await axios.get('https://dummyjson.com/products/' + id);
        console.log(product.data);
        setProduct(product.data);
      }

    }
    productDetails();
  }, [])


  return (
    <>
      <div className="product-page d-flex ">
        <div className="productImagesDiv halfDiv d-flex justify-content-center align-items-center">
          <ProductCarosel images={product.images} />
        </div>
        <div className="productInfoDiv halfDiv d-flex align-items-start">
          <div className='d-flex flex-column row-gap-3 p-4'>
            <h1>{product.title}</h1>
            <h3>Price ${product.price}</h3>
            <h5>{product.category}</h5>
            <p>{product.description}</p>
            <button className='btn btn-primary btn-lg w-25' onClick={() => {
              let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
              cart.push(product);
              localStorage.setItem("cartItems", JSON.stringify(cart));
            }}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>

  );
}

export default Product;
