import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Cart from "./components/Cart";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import Connect from "./components/Connect";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import ResturantCard from "./components/RresturantCard";

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
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
