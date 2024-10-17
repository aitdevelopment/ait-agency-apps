import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCategory } from '@/apiCalling/ApiCalling'

const Header = () => {
  const [categoris, setCategoris] = useState([])
  useEffect(()=>{
    try {
      const loadData = async()=>{
        const catData = await getAllCategory();
        setCategoris(catData)
      }
      loadData();
    } catch (error) {
      
    }
    
  })
  // console.log(categoris)
  return (
    <div className='flex w-full'>
      <div>
        <Link to="/home">Logo</Link>
      </div>
      <div className='w-full flex gap-3'>
        {
          categoris.map((item, index)=>(
            <Link key={index} to={`/category/${item}`}>{item}</Link>
          ))
        }
        
      </div>
    </div>
  )
}

export default Header