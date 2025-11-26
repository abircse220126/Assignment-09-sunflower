import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Register from './Component/Authentication/Register/Register.jsx';
import AuthProvider from './Context/AuthProvider/AuthProvider.jsx';
import Login from './Component/Authentication/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        path:"/",
        Component:Home
      },
      {
        path:"/register",
        Component:Register
      },
      {
        path:"/login",
        Component:Login
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
)
