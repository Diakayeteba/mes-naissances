import { createBrowserRouter, Outlet } from "react-router-dom"
import Users from "../Users";
import App from "../../App";
import Dashboard from "../dashboard/dashboard";

const routes = createBrowserRouter([
  {
    path: "/*",
    children: [
      {
       index: true,
        element: <App />,
      },
      {
        path: "",
        element: <Dashboard/>,
        children :[
          {
            path: "users",
            element : <Users
          }
        ]
      }
    ],
  },
]);

export {routes};