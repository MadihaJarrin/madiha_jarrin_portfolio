import { createBrowserRouter} from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Footer from "../pages/Shared/Footer/Footer";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true, 
        Component: Home,
  },
]
}

 ]) 

