import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import AllProduct from "../components/AllProducts/AllProduct";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import MyProduct from "../components/MyProduct/MyProduct";
import MyBids from "../components/MyBids/MyBids";
import CreateProducts from "../components/CreateProducts/CreateProducts";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/allproducts',
                element: <AllProduct></AllProduct>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '//myproducts',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/mybids',
                element: <MyBids></MyBids>
            },
            {
                path: '/createproducts',
                element: <CreateProducts></CreateProducts>
            },
        ]
    },
]);


