import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Main/Main";

const router = createBrowserRouter([
    { path: '/', element: <Main /> }
]);


export default router;