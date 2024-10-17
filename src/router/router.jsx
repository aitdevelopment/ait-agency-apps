import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../page/home/Home'
import LandingPage from '../page/landingPage/LandingPage'
import Services from '../page/services/Services'
import Portfolio from '../page/portfolio/Portfolio'
import Pricesing from '../page/pricesing/Pricesing'
import Team from '../page/team/Team'
import Technology from '../page/technology/Technology'
import Contact from '../page/contact/Contact'
import PageNotFound from '../page/pageNotFound/PageNotFound'
import Layout from '../layout/Layout'
import SingleProduct from '@/page/singleProduct/SingleProduct'
import ProductCategory from '@/page/productCategory/ProductCategory'

const router = createBrowserRouter([
   {
    path:'/',
    element:<Layout/>,
    children:[
        {
            path:"/",
            element:<LandingPage/>
          },
          {
              path:"/home",
              element:<Home/>
          },{
              path:"/services",
              element:<Services/>
          },{
              path:"/portfolio",
              element:<Portfolio/>
          },{
              path:"/pricesing",
              element:<Pricesing/>
          },{
              path:"/our-team",
              element:<Team/>
          }
          ,{
              path:"/technology",
              element:<Technology/>
          }
          ,{
              path:"/contact-us",
              element:<Contact/>
          }
          ,{
            path:"/product/:id",
            element:<SingleProduct/>
           }
          ,{
            path:"/category/:id",
            element:<ProductCategory/>
           }
          ,{
              path:"*",
              element:<PageNotFound/>
          }
    ]
   }
  ])

export default router