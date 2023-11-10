import "./styles.css";
import SignupForm from "./components/CustomForm/SignUp";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Profile from "./components/Profile";
import AuthProvider from "./components/context/context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/Signup",
      exact: true,
      element: <SignupForm />
    },
    {
      path: "/profile/:id",
      element: <Profile />
    },
    {
      path: "/*",
      element: <ErrorPage />
    }
  ]);

  return (
    <div className="App">
      <AuthProvider value={"asi"}>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}
