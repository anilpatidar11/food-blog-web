import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './pages/Home'
import MainNavigation from './Component/MainNavigation'
import axios from 'axios'

const getAllRecipes=async()=> {
  let allRecipes = []
  await axios.get('http://localhost:4000/recipe').then(res => {
    allRecipes=res.data
  })
  return allRecipes
}


const router = createBrowserRouter([
  {
    path: '/', element: <MainNavigation />, children: [
      {path:'/',element:<Home/>,loader:getAllRecipes}
    ]}

])
const App = () => {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App