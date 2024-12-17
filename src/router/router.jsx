
import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register/Register";
import Signin from "../pages/Signin/Signin";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
     
      {
        path:'/signin',
        element:<Signin></Signin>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      

    ]
  },
]);

export default router
