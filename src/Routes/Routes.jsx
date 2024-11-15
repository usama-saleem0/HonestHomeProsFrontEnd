import React from "react";
import { useRoutes } from "react-router-dom";
import App from "../App";
import Landing from "../pages/Landing";
import Dashborad from "../pages/Dashborad";
import Chat from "../pages/Chat";
import Login from "../components/Login/Login";
import Singup from "../components/Login/Singup";
import Forgot from "../components/Login/Forgot";
import Otp from "../components/Login/Otp";
import Reset from "../components/Login/Reset";
import Signup from "../components/Login/Singup";
import CustomerPolicy from "../components/footer-components/CustomerPolicy";
import Howitwork from "../components/footer-components/HowitWork";
import PrivacyPolicy from "../components/footer-components/PrivacyPolicy";
import VendorPolicy from "../components/footer-components/VendorPolicy";
import PandaDocPage from "../pages/PandaDocPage";



const Routes = () => {
  return useRoutes([



    { path: "/",element: <Landing />,},

    { path: "/dashboard",element: <Dashborad />,},

    { path: "/Chat/:id/:customerid",element: <Chat />,},

    { path: "/Login",element: <Login />,},

    { path: "/Singup",element: <Signup />,},

    { path: "/Forgot",element: <Forgot />,},

    { path: "/Otp/:email",element: <Otp />,},

    { path: "/Reset/:email/:otp",element: <Reset />,},




    
    { path: "/CustomerPolicy",element: <CustomerPolicy />,},

    { path: "/Howitwork",element: <Howitwork />,},

    { path: "/PrivacyPolicy",element: <PrivacyPolicy />,},

    { path: "/VendorPolicy",element: <VendorPolicy />,},

    { path: "/pandadoc",element: <PandaDocPage />,},

  ]);
};

export default Routes;
