import AllFeatures from "../pages/AllFeatures";
import Home from "../pages/homepage/Home";

export const userRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/all-features",
    element: <AllFeatures />,
  },
];
