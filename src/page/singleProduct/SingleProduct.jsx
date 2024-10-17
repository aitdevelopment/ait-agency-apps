import { getProductById } from '@/apiCalling/ApiCalling';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const pramsId = useParams();

    useEffect(()=>{
        const LoadData = async()=>{
           const productInfo = await getProductById(pramsId.id);
           setProduct(productInfo);
        }
        LoadData();
    },[]);
    console.log(product);
  return (
    <div>
        <img src={product?.image} alt="" />
        <span>{product.category}</span>
        <h1>{product.title}</h1>
        <h1>{product.description}</h1>
    </div>
  )
}

export default SingleProduct