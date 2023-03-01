import './App.css';

import Login from './component/Login';
import Registration from './component/Registration';
import Dashboard from './component/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {path:'/', element:<Login/>},
  {path:'/registration',element:<Registration />},
  {path:'/dashboard', element:<Dashboard />}
])
function App() {
 
    return <RouterProvider router={router} />;
     
  
}
 
export default App;