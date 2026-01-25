import { createBrowserRouter} from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Blog from "../pages/Blogs/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true, 
        Component: Home,
  },
  {
        path: "/home",
        Component: Home,
  },
  
  {
        path: "/blogs",
        Component: Blog,
  },
]
}

 ]) 

