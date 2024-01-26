import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'

import App from './App.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';
import Error from './pages/Error.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <About/>
      },
      {
        path: 'contact',
        element: <Contact/>,
      },
      {
        path: 'resume',
        element: <Resume/>,
      },
      {
        path: 'portfolio',
        element: <Portfolio/>,
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
