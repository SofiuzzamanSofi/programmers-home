import { createBrowserRouter } from "react-router-dom";
import AboutBlog from "../../component/AboutBlog/AboutBlog";
import ErrorPage from "../../component/ErrorPage/ErrorPage";
import FaqPage from "../../component/FaqPage/FaqPage";
import Framework from "../../component/Framework/Framework";
import CourseDetails from "../../component/InsideHome/CourseDetails/CourseDetails";
import Courses from "../../component/InsideHome/Courses/Courses";
import Home from "../../component/InsideHome/Home/Home";
import Language from "../../component/Language/Language";
import Main from "../../LayoutMain/Main";
import { categoryDetails, categoryWiseFuction, frameworkFn, languageFn, mainHomeFunction } from "../../LoaderFunction/LoaderFunction";
import SignInOut from "../../SignInOut/SignInOut";

const router = createBrowserRouter([
    { path: 'signin', element: <SignInOut /> },
    {
        path: '/', element: <Main />, errorElement: <ErrorPage />, children: ([
            { path: '/', element: <Home />, loader: mainHomeFunction },
            { path: 'home', element: <Home />, loader: mainHomeFunction },
            { path: 'course/:category', element: <Courses />, loader: ({ params }) => categoryWiseFuction(params.category) },
            { path: 'course/category/:id', element: <CourseDetails />, loader: ({ params }) => categoryDetails(params.id) },
            { path: 'blog', element: <AboutBlog /> },
            { path: 'faq', element: <FaqPage /> },
            { path: 'language', element: <Courses />, loader: languageFn },
            { path: 'framework', element: <Courses />, loader: frameworkFn },

        ])
    }
]);


export default router;