import { BeakerIcon } from '@heroicons/react/24/solid'
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Route/router';



function App() {
  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
