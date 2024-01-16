import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Layout from './Layout.tsx'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Login from './components/Login.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Login />} />
      <Route path="dashboard" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
