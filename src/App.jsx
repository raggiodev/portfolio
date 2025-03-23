import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Model3D from "./layouts/Model3D";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/3D",
    element: <Model3D />,
  },
]);

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
