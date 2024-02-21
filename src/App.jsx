import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

const router = createBrowserRouter([
  {
    path:'/',
    element:
    <div>
      <Navbar/>
      <Home/>
      
    </div>
  },
  {
    path:'/theme',
    element: <div>Hello world
  </div>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
