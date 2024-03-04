/*import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



function Product (){

  
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch product. Status: ${response.status}`);
      }

      const productData = await response.json();
      setProduct(productData);
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };


  const addToCart = (item) => {
    dispatch({
      type: "ADDITEM",
      payload: { name: item.title, price: item.price },
    });
  };

  



  const Loading = () => (
    <div className="mt-4">
      {[...Array(7)].map((_, index) => (
        <Spinner key={index} animation="grow" />
      ))}
    </div>
  );

  const ShowProduct = () => (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mt-5">
          <img src={product.image} alt={product.image} height={300} width={400}  style={{ marginRight: '10px' }}/>
        </div>
        <div className="col-lg-6 mt-5">
          <h4 className='texr-uppercase mb-3'>{product.category}</h4>
          <h1 className='display-5 mb-4'>{product.title}</h1>
          <p className='fw-bolder mb-3'>Rating {product.rating ? product.rating.rate : 'N/A'}</p>
          <h3>$ {product.price}</h3>
          <p className='mt-4'>{product.description}</p>
           <div className='mt-4'>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <Link to="/cart" className='ms-3'>Go to Cart</Link>
      
          

        </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="container">
        {loading ? <Loading /> : <ShowProduct/>}
      </div>
    </div>
  )
}

export default Product;*/



// Product.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch } from 'react-redux';

function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch product. Status: ${response.status}`);
      }

      const productData = await response.json();
      setProduct(productData);
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (item) => {
    dispatch({
      type: "ADDITEM",
      payload: item,
    });
  };

  const Loading = () => (
    <div className="mt-4">
      {[...Array(7)].map((_, index) => (
        <Spinner key={index} animation="grow" />
      ))}
    </div>
  );

  const ShowProduct = () => (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mt-5">
          <img src={product.image} alt={product.image} height={300} width={400} style={{ marginRight: '10px' }} />
        </div>
        <div className="col-lg-6 mt-5">
          <h4 className='texr-uppercase mb-3'>{product.category}</h4>
          <h1 className='display-5 mb-4'>{product.title}</h1>
          <p className='fw-bolder mb-3'>Rating {product.rating ? product.rating.rate : 'N/A'}</p>
          <h3>$ {product.price}</h3>
          <p className='mt-4'>{product.description}</p>
          <div className='mt-4'>
            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="container">
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  );
}

export default Product;
