import React from 'react'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CartPage from './pages/CartPage'
import CheckOut from './pages/CheckOut'
import ProductDetailPage from './pages/ProductDetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: (<Home></Home>)
  },
  {
    path: '/login',
    element: (<LoginPage></LoginPage>)
  },
  {
    path: '/signup', 
    element: (<SignUpPage></SignUpPage>)
  },
  {
    path: '/cart',
    element: (<CartPage></CartPage>)
  },
  {
    path: '/checkout',
    element: (<CheckOut></CheckOut>)
  },
  {
    path: '/product-detail',
    element: (<ProductDetailPage></ProductDetailPage>)
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
