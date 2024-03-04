/*import * as React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const url = "https://fakestoreapi.com/products";

function Prod() {

  const [product, setproduct] = useState([]);
  useEffect(() => {
    const fetchproduct = async () => {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setproduct(result);
    };
    fetchproduct();
  }, []);
  
  
  return (
    <div className="container">
      <h1 className='space-y-8'>Our Products</h1>
      <div className="row space-y-8 space-x-8 ">
        <div className="p-3 grid grid-cols-3 gap-3">
          {product &&
            product.map((item) => (
              <div className="w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-#d6d3d1 light:border-#d6d3d1 gap-0   transition-all duration-500 hover: hover:scale-125 overflow-hidden mt-custom">
                <img
                  className="w-full h-32 object-contain "
                  src={item.image}
                  alt={item.title}
                />
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black truncate pt-4 pb-4">
                  {item.title}
                </h5>
                <div className="inline flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-black">
                    ₹{item.price}
                  </span>

                  <NavLink to = {'/product/${item.id}'}
                    className="btn btn-outline-dark"
                  >
                    Buy
                  </NavLink>
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-left">
                  {item.category}
                </h5>

                <p className="font-normal text-gray-700 dark:text-gray-400 truncate gap-0">
                  {item.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Prod; 



import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const Prod = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        setLoading(true)
        const response = await fetch("https://fakestoreapi.com/products")

        setData(await response.json())
        setFilter(data)
        setLoading(false)
    }
    const Loading = () => {
        return (
            <>
             <div className="mt-4 ">
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                </div>
            </>
        )
    }
    const filterProduct = (cat) => {
        const updatedItems = data.filter((item) => item.category === cat)
        setFilter(updatedItems)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons">
                    <Button onClick={() => setFilter(data)} className='me-2' variant="outline-dark">All Brands</Button>
                    <Button onClick={() => filterProduct("men's clothing")} className='me-2' variant="outline-dark">Men</Button>
                    <Button onClick={() => filterProduct("women's clothing")} className='me-2' variant="outline-dark">Women</Button>
                    <Button onClick={() => filterProduct("jewelery")} className='me-2' variant="outline-dark">Jewelery</Button>
                    <Button onClick={() => filterProduct("electronics")} className='me-2' variant="outline-dark">Electronics</Button>
                </div>
                {filter.map((item) => {
                    return (
                        <div className="col-3 mt-5">
                            <Card key={item.id} className="border border-dark">
                                <Card.Img variant="top" style={{ height: '300px' }} src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title.substring(0, 12)}</Card.Title>
                                    <Card.Text className='fw-bold'>
                                        $ {item.price}
                                    </Card.Text>
                                    <Link to={`/prod/${item.id}`}> <Button variant="dark">Buy Now</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </>
        )
    }
    return (
        <div>
            <div className="container mt-5 pb-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className='display-6 '>All Products</h1>
                        <hr />
                        <div className="row justify-content-center">
                            {loading ? <Loading /> : <ShowProducts />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prod;*/




import * as React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const url = "https://fakestoreapi.com/products";

function Prod() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        setProduct(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="container">
      <h1 className="space-y-8">Our Products</h1>
      <div className="row space-y-8 space-x-8 ">
        <div className="p-3 grid grid-cols-3 gap-3">
          {product &&
            product.map((item) => (
              <div
                key={item.id} 
                className="w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow transition-all duration-500 hover: hover:scale-125 overflow-hidden mt-custom"
              >
                <img
                  className="w-full h-32 object-contain"
                  src={item.image}
                  alt={item.title}
                />
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 truncate pt-4 pb-4">
                  {item.title}
                </h5>
                <div className="inline-flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900">
                    ₹{item.price}
                  </span>
                </div>
                <div className ="mt-2">
                  <NavLink to={`/product/${item.id}`} className="btn btn-dark ">
                    Buy
                  </NavLink>
                  </div>
                

              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Prod;
