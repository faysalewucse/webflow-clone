import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "aos/dist/aos.css";
import "swiper/swiper-bundle.css";

import { useEffect } from "react";
import Aos from "aos";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
