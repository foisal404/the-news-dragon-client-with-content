import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Catagories from "../pages/Home/Catagories/Catagories";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Catagories></Catagories>,
                loader:({params})=> fetch(`http://localhost:5000/categories/0`)
            },
            {
                path:'/category/:id',
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
                element:<News></News>,
                loader:({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;