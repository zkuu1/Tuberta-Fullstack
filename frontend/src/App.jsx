import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CreateAcc from './Components/CreateAcc';
import Login from './Components/login';
import Recover from './Components/Recover';
import About from './Components/About';
import Menu from './Components/Menu';
import Contact from './Components/Contact';
import Error from './Error';
import MainLayout from './MainLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: "menu",
          element: <Menu />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "login-account",
      element: <Login />,
    },
    {
      path: "register-account",
      element: <CreateAcc />,
    },
    {
      path: "recovery-account",
      element: <Recover />,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
