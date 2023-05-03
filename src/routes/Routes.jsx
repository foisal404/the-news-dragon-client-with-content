import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Catagories from "../pages/Home/Catagories/Catagories";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import Login from "../pages/Login/Login/Login";
import LoginLayout from "../layouts/LoginLayout";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element:<Navigate to='/category/0'></Navigate>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [
            
            {
                path:"/category/:id",
                element:<Catagories></Catagories>,
                loader:({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path:'/news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:'/news/:id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;