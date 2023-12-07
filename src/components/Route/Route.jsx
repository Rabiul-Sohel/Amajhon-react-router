
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../MainLayout/MainLayout.jsx";
import Home from "../Home/Home.jsx";
import Products from "../Products/Products.jsx";
import About from "../About/About.jsx";
import ProductDetails from "../ProductDetails/ProductDetails.jsx";
import DashboardLayout from "../DashboardLayout/DashboardLayout.jsx";
import DashboardHome from "../DashboardHome/DashboardHome.jsx";
import Profile from "../Profile/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch(`https://dummyjson.com/products`),
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.id}`),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "/dashboard",
            element: <DashboardHome></DashboardHome>
          },
          {
            path: "/dashboard/profile",
            element: <Profile></Profile>
          }
        ]
      }
    ],
  },
]);
export default router;