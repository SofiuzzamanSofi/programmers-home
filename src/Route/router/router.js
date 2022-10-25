import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../component/ErrorPage/ErrorPage";
import CourseDetails from "../../component/InsideHome/CourseDetails/CourseDetails";
import Courses from "../../component/InsideHome/Courses/Courses";
import Home from "../../component/InsideHome/Home/Home";
import Main from "../../LayoutMain/Main";
import { categoryDetails, categoryWiseFuction, mainHomeFunction } from "../../LoaderFunction/LoaderFunction";

const router = createBrowserRouter([
    {
        path: '/', element: <Main />, errorElement: <ErrorPage />, children: ([
            { path: '/', element: <Home />, loader: mainHomeFunction },
            { path: 'home', element: <Home /> },
            { path: '/course/:category', element: <Courses />, loader: ({ params }) => categoryWiseFuction(params.category) },
            { path: '/course/category/:id', element: <CourseDetails />, loader: ({ params }) => categoryDetails(params.id) },
        ])
    }
]);


export default router;