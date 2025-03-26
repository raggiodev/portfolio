import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle";
import LanguageToggle from "./components/LanguageToggle";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Model3D from "./layouts/Model3D";
import "./i18n/i18n";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
    ],
  },
  { path: "/3D", element: <Model3D /> },
]);

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <LanguageToggle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
