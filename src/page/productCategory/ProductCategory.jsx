import { getProductByCategory } from '@/apiCalling/ApiCalling';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ProductCategory = () => {
    const [product, setProduct] = useState([]);
    const pramsId = useParams();

    useEffect(()=>{
        const LoadData = async()=>{
           const productInfo = await getProductByCategory(pramsId.id);
           setProduct(productInfo);
        }
        LoadData();
    },[pramsId]);
    console.log(product);
  return (
    <div className='w-full flex flex-wrap gap-2'>{product.length > 0 ? product.map((items)=>(
        <Link to={`/product/${items.id}`} className='w-[19%] flex flex-col bg-white p-2 rounded shadow'>
          <div className='w-full'>
            <img className='w-full h-[220px]' src={items.image} alt="" />
          </div>
          <h1>{items.title}</h1>

        </Link>
      )) : <h1>Products Is Loading.....</h1>}</div>
  )
}

export default ProductCategory