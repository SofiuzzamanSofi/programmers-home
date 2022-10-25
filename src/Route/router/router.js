import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../component/ErrorPage/ErrorPage";
import Home from "../../component/InsideHome/Home/Home";
import Main from "../../LayoutMain/Main";

const router = createBrowserRouter([
    {
        path: '/', element: <Main />, errorElement: <ErrorPage />, children: ([
            { path: '/', element: <Home /> },
            { path: 'home', element: <Home /> },
        ])
    }
]);


export default router;