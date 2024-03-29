import React, { lazy, Suspense, useState } from "react";
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
import { Provider } from "react-redux";
import store from "./utils/store";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet, 
} from "react-router-dom";
import ResturantCard from "./components/ResturantCard";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
const AppLayout = () => {
  const [user,setUser]=useState({
    name:"Shubham",
    email:"100xdev@gmail.com"
  })
  return (
    <>
    <Provider store={store}>
    <UserContext.Provider value={{user:user,setUser:setUser}}>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
      </UserContext.Provider>
      </Provider>
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
        path:"/cart",
        element:<Cart/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
