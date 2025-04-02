import Home from "../pages/Home";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";
import { RouteObject } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const routes:  RouteObject[] = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;