import { useState } from "react";
import {
   createBrowserRouter,
   RouterProvider,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      children: [
         { path: "", element: <Home /> },
         { path: "skills", element: <Skills /> },
      ],
   },
]);

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
