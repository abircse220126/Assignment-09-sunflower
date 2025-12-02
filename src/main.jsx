import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Layout/Root.jsx";
import Home from "./Component/Home/Home.jsx";
import Register from "./Component/Authentication/Register/Register.jsx";
import AuthProvider from "./Context/AuthProvider/AuthProvider.jsx";
import Login from "./Component/Authentication/Login/Login.jsx";
import MyProfile from "./Component/MyProfile/MyProfile.jsx";
import ViewDetails from "./Component/ViewDetails/ViewDetails.jsx";
import ForgetPassword from "./Component/ForgetPassword/ForgetPassword.jsx";
import TopCategories from "./Component/TopCategories/TopCategories.jsx";
import PrivateRoute from "./Component/PrivatteRoute/PrivateRoute.jsx";
import AuthLayout from "./Layout/AuthLayout/AuthLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    children: [
      {
        path: "/",
        // Component: Home,
        element: (
          <PrivateRoute>
            <Home></Home>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-profile",
        // Component: MyProfile,
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/view-details",
        // Component: ViewDetails,
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "forget-password",
        // Component: ForgetPassword,
        element: (
          <PrivateRoute>
            <ForgetPassword></ForgetPassword>
          </PrivateRoute>
        ),
      },
      {
        path: "/top-categories",
        // Component: TopCategories,
        element: (
          <PrivateRoute>
            <TopCategories></TopCategories>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>
);
