import React, { useEffect, useState } from 'react'
import { getProudects } from '@/apiCalling/ApiCalling';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
      const loadData = async()=>{
        const productList = await getProudects();
        setProducts(productList);
      }
      loadData();
  },[])
  return (
    <div className='w-full min-h-[100vh] bg-cyan-950 flex flex-wrap gap-3 justify-betweet py-8'>
      {products.length > 0 ? products.map((items)=>(
        <Link to={`/product/${items.id}`} className='w-[19%] flex flex-col bg-white p-2 rounded shadow'>
          <div className='w-full'>
            <img className='w-full h-[220px]' src={items.image} alt="" />
          </div>
          <h1>{items.title}</h1>

        </Link>
      )) : <h1>Products Is Loading.....</h1>}

    </div>

  )

}


export default Home;