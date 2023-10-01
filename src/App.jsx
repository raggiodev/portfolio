import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App;
