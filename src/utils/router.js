import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home.jsx"
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";

const router=createBrowserRouter(
    [
        {
            path:"/",
            element:<App/>,
            children:[
                {
                    path:"/",
                    element:<Home/>
                },
                {
                  path:"/AboutMe",
                  element:<About/>
                },
                {
                    path:"/ContactMe",
                    element:<Contact/>
                }
            ]
        }
    ]
)

export default router;