import ChallengesSolve from "./components/ChallengesSolve";
import Client from "./components/Client";
import Experience from "./components/Experience";

import Hero from "./components/Hero";
import LoveWorking from "./components/LoveWorking";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Hero />
            <WhyUs />
            <ChallengesSolve />
            <Services />
            <Experience />
            <LoveWorking />
            <Client />
          </>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
