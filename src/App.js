import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error.js";
// import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";
import { Footer } from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import { Profile } from "./components/Profile.js";
import ProfileClassCompo from "./components/ProfileClass";
// import ProfileFunctionalComponent from "./components/Profile";
const About = lazy(() => import("./components/About.js"));
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        // children: [
        //   {
        //     path: "profile", // its parent/profile
        //     element: <ProfileClassCompo />,
        //   },
        // ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
