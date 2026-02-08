import { createBrowserRouter } from "react-router-dom";

import Main from "../controler/Main";
import Home from "../models/Home";


import Gallery from "../models/Gallery";
import Artist from "../models/Artist";
import Contact from "../models/Contact";

const router=createBrowserRouter([
      {
    path: "/",
    element: <Main></Main>,
   
    children: [

      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path : "gallery",
        element:<Gallery></Gallery>,
      },
      {
        path:"artist",
        element: <Artist></Artist>,
      },
      {
        path : "contact",
        element: <Contact></Contact>,
      }
    ],
  },
])
export default router;