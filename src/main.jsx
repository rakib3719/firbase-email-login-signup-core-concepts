import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root/Root';
import SignIn from './components/signinLogin/SignIn';
import SignUp from './components/signinLogin/SignUp';

const router = createBrowserRouter([

{

  path: '/',
  element:<Root></Root>,
  children:[
{
  
path: '/login',
element: <SignIn></SignIn>

},

{
  
  path: '/signup',
  element: <SignUp></SignUp>
  
  },
  {

    
  path: '/about',
  element: <p>THis is about section</p>


}


  ]
}


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider  router={router} ></RouterProvider>
  </React.StrictMode>,
)
