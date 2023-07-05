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
import { ErrorPage } from "./pages/ErrorPage";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage/>,
      children: [
         { path: "", element: <Home /> },
         { path: "skills", element: <Skills /> },
         { path: "projects", element: <Projects/>},
         { path: "resume", element: <Resume/>}
      ],
   },
]);

function App() {

   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
