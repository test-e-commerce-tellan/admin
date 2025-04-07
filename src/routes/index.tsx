import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";
import { RouteObject } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Orders from "../pages/orders/Orders";
import Products from "../pages/products/Products";
import Reports from "../pages/reports/Reports.jsx"
import Categories from "../pages/categories/Categories.js";
import LoginPage from "../pages/login/LoginPage.js";
import RegisterPage from "../pages/register/RegisterPage.js";

const routes:  RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "categories",
        element: <Categories />,
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