import { lazy } from "react";
import { MdCampaign, MdDashboard, MdFeedback, MdMessage, MdReport } from "react-icons/md";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaPowerOff, FaUsers } from "react-icons/fa";

export const PageRoutes = [
  {
    path: "/",
    title: "Dashboard",
    element: lazy(() => import("./pages/HomePage")),
    icon: <MdDashboard size={24} />,
  },
  {
    path: "/donations",
    title: "Donations",
    element: lazy(() => import("./pages/DonationPage")),
    icon: <BiSolidDonateHeart size={24} />,
  },
  {
    path: "/campaigns",
    title: "Campaigns",
    element: lazy(() => import("./pages/DonationPage")),
    icon: <MdCampaign size={24} />,
  },
  {
    path: "/requests",
    title: "Requests",
    element: lazy(() => import("./pages/DonationPage")),
    icon: <MdMessage size={24} />,
  },
  {
    path: "/users",
    title: "Accounts",
    element: lazy(() => import("./pages/UsersPage")),
    icon: <FaUsers size={24} />,
  },
  {
    path: "/feedbacks",
    title: "Feedbacks",
    element: lazy(() => import("./pages/DonationPage")),
    icon: <MdFeedback size={24} />,
  },
  {
    path: "/reports",
    title: "Reports",
    element: lazy(() => import("./pages/DonationPage")),
    icon: <MdReport size={24} />,
  },
  {
    path: "/logout",
    title: "Logout",
    element: lazy(() => import("./pages/DonationPage")),
    icon: <FaPowerOff size={24} />,
  },
];
