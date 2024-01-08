import React, { Suspense, lazy, useState } from "react";
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
import Instamart from "./components/Instamart.js";
import UserContext from "./utils/UserContext.js";
// import ProfileFunctionalComponent from "./components/Profile";
const About = lazy(() => import("./components/About.js"));
import { Provider } from "react-redux";
import store from "./utils/store.js";
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Prashant Kumar",
    email: "pkumars397@gmail.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/instamart",
        element: <Instamart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
