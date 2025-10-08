import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        // loader: () => fetch("/AppData.json"),
      },
      {
        path: "/Apps",
        element: <Apps></Apps>,
      },
      {
        path: "/Apps/:id",
        element: <AppDetails></AppDetails>,
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
    ],
  },
]);
export default router;
