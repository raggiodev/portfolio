import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './pages/Home';

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
    <RouterProvider router={router}/>
  );
}

export default App;