import { createBrowserRouter } from "react-router-dom";
import AboutBlog from "../../component/AboutBlog/AboutBlog";
import ErrorPage from "../../component/ErrorPage/ErrorPage";
import FaqPage from "../../component/FaqPage/FaqPage";
import CourseDetails from "../../component/InsideHome/CourseDetails/CourseDetails";
import Courses from "../../component/InsideHome/Courses/Courses";
import FirstLandingPage from "../../component/InsideHome/FirstLandingPage/FirstLandingPage";
import Home from "../../component/InsideHome/Home/Home";
import Main from "../../LayoutMain/Main";
import { categoryDetails, categoryWiseFuction, frameworkFn, languageFn, mainHomeFunction } from "../../LoaderFunction/LoaderFunction";
import SignInUp from "../../SignInUp/SignInUp";

const router = createBrowserRouter([
    { path: 'signin', element: <SignInUp /> },
    { path: 'signup', element: <SignInUp /> },
    {
        path: '/', element: <Main />, errorElement: <ErrorPage />, children: ([
            { path: '/', element: <FirstLandingPage />, loader: mainHomeFunction },
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