import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Details from './../Pages/Details';
import PrivateRouter from "./PrivateRouter";
import Root from "./Root";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/login',
        element: <Login></Login>,
      },
      {
        path:'/register',
        element: <Register></Register>,
      },
      {
        path:'/details/:id',
        element: <PrivateRouter><Details></Details></PrivateRouter>,
      }
    ]
  },
]);
export default Router;