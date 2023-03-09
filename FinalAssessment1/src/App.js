import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Registration from "./components/registration";
import Success from "./components/success";
import Password from "./components/password";
import ProductInfo from "./components/productInfo";
import Users from "./components/UserListing";
import Todo from "./components/index";
import Post from "./components/post";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/registration", element: <Registration /> },
  { path: "/success", element: <Success /> },
  { path: "/password", element: <Password /> },
  { path: "/ProductInfo", element: <ProductInfo /> },
  { path: "/userslisting", element: <Users /> },
  { path: "/todo", element: <Todo /> },
  { path: "/post", element: <Post /> }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
