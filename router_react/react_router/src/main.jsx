import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Error from './assets/Error_1.jsx'
import Profiles from './assets/Profiles_1.jsx'
import Profilepage from './assets/Profilepage.jsx'
import './index.css'

const router = createBrowserRouter([
  {
  path: '/',
  element: <App/>,
  errorElement: <Error/>
  },
  {
    path: '/profiles',
    element: <Profiles/>,
    errorElement: <Error/>
  },
  {
    path: '/profiles/:id',
    element: <Profilepage/>,
    errorElement: <Error/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
