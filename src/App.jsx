
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Fruits from './components/Fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import SeaFood from './components/SeaFood/SeaFood'
import Bakery from './components/Bakery/Bakery'
import AllProduct from './components/AllProduct/AllProduct'


const App = () => {

  const router = createBrowserRouter([

   {
    path: '/',
    element: <Home/>
   },

    {
      path: '/fruits',
      element : <Fruits/>,

    },
    {
      path: '/dairy',
      element : <Dairy/>,

    },
    {
      path: '/seafood',
      element : <SeaFood/>,

    },
     {
      path: '/bakery',
      element : <Bakery/>,

    },
    {
      path: '/allproduct',
      element : <AllProduct/>,

    },
   ])

   return <RouterProvider router={router}/>
 

}




export default App