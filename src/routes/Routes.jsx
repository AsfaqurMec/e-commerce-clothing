import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Contact from "../Components/Contact/Contact";
import Detail from "../Components/Detail/Detail";
import Collection from "../Components/Collection/Collection";
import Error from "../Components/Error/Error";
import Wishlist from "../Components/Wishlist/Wishlist";
import Cart from "../Components/Cart/Cart";
import Blog from "../Components/Blog/Blog";
import Shop from "../Components/Shop/Shop";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>, 
              
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
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/latest/:id',
                element: <Detail></Detail>
                
            },
            {
                path: '/collection/:category',
                element: <Collection></Collection>
                
            },
            {
                path: '/wishlist',
                element: <Wishlist></Wishlist>
                
            },
            {
                path: '/cart',
                element: <Cart></Cart>
                
            },
            {
                path: '/blog',
                element: <Blog></Blog>
                
            },
            {
                path: '/shop',
                element: <Shop></Shop>
                
            },
        ]
    }
]);

export default router;