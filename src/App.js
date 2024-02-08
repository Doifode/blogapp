import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Home from "./pages/Home";
import Register from "./pages/Register"
import NavBar from './commonComponents/NavBar';
import Footer from './commonComponents/Footer';
import Single from "./pages/Single"
import Write from "./pages/Write"
import Login from './pages/Login';
import "./style.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import VerifyEmail from './pages/VerifyEmail';

const Layout = () => {
  // layout component  that will work as router space  
  // outlet used to render pages at that position
  return <>
    <NavBar />
    <Outlet />
    <Footer />
  </>
}


function App() {
  // creating routes using createBrowserRoute method.

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/post/:id",
          element: <Single />
        },
        {
          path: "/write",
          element: <Write />
        }
      ]
    },
    {
      path: "/register",
      element: <Register />

    },
    {
      path: "/login",
      element: <Login />

    },
    {
      path: "/verifyemail/:id",
      element: <VerifyEmail />

    }
  ])

  // RouterProvider will provide all the  routes through out the  application.
  return (
    <div className="app">
      <div className="containers">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
