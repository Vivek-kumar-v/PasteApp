import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import ViewPastes from './components/ViewPastes';
import Paste from './components/Paste';


const router = createBrowserRouter(
  [
    {
      path:"/",
      element :
      <div>
          <Navbar/>
          <Home/>
      </div>
    },
    {
      path:"/pastes",
      element :
      <div>
          <Navbar/>
          <Paste/>
      </div>
    },
    {
      path:"/pastes/:id",
      element :
      <div>
          <Navbar/>
          <ViewPastes/>
      </div>
    },
  ]
);


function App() {
  

  return (
    <div>
      <div>
    <RouterProvider router ={router}/>
      </div>

      
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2025 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Vivek Patel
        </a>
      </div>
    </div>
  )
}

export default App
