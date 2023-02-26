import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="font-serif">
   <RouterProvider router={router}> </RouterProvider>
   <Toaster></Toaster>
    </div>
  );
}

export default App;
