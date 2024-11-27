import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import Root from "../Root";
import HomeLayout from "../layout/HomeLayout";
import AboutUs from "../page/AboutUs";
import Details from "../page/Details";
import ForgetPassword from "../page/ForgetPassword";
import Login from "../page/Login";
import Profile from "../page/Profile";
import Register from "../page/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/serviceDetails/:serviceId",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/aboutus",
        element: (
          <PrivateRoute>
            <AboutUs />
          </PrivateRoute>
        ),
      },
      {
        path: "/forgot-password",
        element: <ForgetPassword />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
