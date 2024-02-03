import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
// import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import RestaurantMenu from "../components/RestaurantMenu";
// import Grocery from "../components/Grocery";

const Grocery=lazy(()=>import ("../components/Grocery"))
const About=lazy(()=>import('../components/AboutUs'))
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading....</h1>}> <About/>  </Suspense>
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (<Suspense fallback={<h1>Loading.....</h1>}>
          <Grocery/> </Suspense>),
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      },
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
