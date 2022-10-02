import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './componants/Home/Home';
import About from './componants/About/About';
import Products from './componants/Products/Products';
import Main from './layout/Main';
import Friends from './componants/Friends/Friends';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/products', element: <Products></Products> },
        { path: '/friends', element: <Friends></Friends> }

      ]
    },

    { path: '/about', element: <About></About> },

  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
