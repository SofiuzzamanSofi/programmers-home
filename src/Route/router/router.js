import { createBrowserRouter } from "react-router-dom";
import AboutBlog from "../../component/AboutBlog/AboutBlog";
import CategoryWise from "../../component/CategoryWise/CategoryWise";
import ErrorPage from "../../component/ErrorPage/ErrorPage";
import FaqPage from "../../component/FaqPage/FaqPage";
import Framework from "../../component/Framework/Framework";
import CourseDetails from "../../component/InsideHome/CourseDetails/CourseDetails";
import FirstLandingPage from "../../component/InsideHome/FirstLandingPage/FirstLandingPage";
import Home from "../../component/InsideHome/Home/Home";
import Language from "../../component/Language/Language";
import CheckOutPage from "../../component/PrivetPages/CheckOutPage/CheckOutPage";
import ProfilePage from "../../component/PrivetPages/ProfilePage/ProfilePage";
import Main from "../../LayoutMain/Main";
import { categoryDetails, categoryWiseFuction, frameworkFn, languageFn, mainHomeFunction } from "../../LoaderFunction/LoaderFunction";
import SignInUp from "../../SignInUp/SignInUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    { path: 'signin', element: <SignInUp /> },
    { path: 'signup', element: <SignInUp /> },
    {
        path: '/', element: <Main />, errorElement: <ErrorPage />, children: ([
            { path: '/', element: <FirstLandingPage />, loader: mainHomeFunction },
            { path: 'home', element: <Home />, loader: mainHomeFunction },
            { path: 'course/:category', element: <CategoryWise></CategoryWise>, loader: ({ params }) => categoryWiseFuction(params.category) },
            { path: 'course/category/:id', element: <CourseDetails />, loader: ({ params }) => categoryDetails(params.id) },
            { path: 'blog', element: <AboutBlog /> },
            { path: 'faq', element: <FaqPage /> },
            { path: 'language', element: <Language></Language>, loader: languageFn },
            { path: 'framework', element: <Framework></Framework>, loader: frameworkFn },
            { path: 'profile', element: <PrivetRoute><ProfilePage /></PrivetRoute> },
            { path: 'checkout/:id', element: <PrivetRoute><CheckOutPage /></PrivetRoute>, loader: ({ params }) => categoryDetails(params.id) },

        ])
    }
]);


export default router;