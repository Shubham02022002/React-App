import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Cart from "./components/Cart";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import Connect from "./components/Connect";
import ProfileClass from "./components/ProfileClass";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet, 
} from "react-router-dom";
import ResturantCard from "./components/RresturantCard";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
// import InstaMart from "./components/InstaMart";

const InstaMart=lazy(()=>  import("./components/InstaMart"));
const AppLayout = () => {
  return (
    <>
      <Header></Header>
      {/* <Body></Body> */}
      <Outlet />
      <Footer></Footer>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/about",
        element: <About />,
        children:[{
          path:"profile",
          element:<ProfileClass/>
        }]
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/connect",
        element: <Connect />,
      },
      {
        path:"/resturant/:id",
        element:<ResturantMenu/>
      },
      {
        path:"/instamart",
        element:<Suspense fallback={<Shimmer/>}> <InstaMart/></Suspense> 
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
