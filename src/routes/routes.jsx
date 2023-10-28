import { Navigate } from "react-router-dom";
import { HomeLayout } from "../layouts/public/HomeLayout";
import LoginPage from "../modules/auth/pages/LoginPage";

const routes = [
    {
      path: "*",
      element: <HomeLayout />,
      children: [
        { path: "", element: <Navigate to="/login" replace /> },
        { path: "login", element: <LoginPage /> },
      ],
    },
  ];
  
  export default routes;