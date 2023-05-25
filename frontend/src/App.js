
import './App.css';
import{createBrowserRouter, RouterProvider} from 'react-router-dom'
import { ROUTES } from './router/router';
import { MainContext } from './Context/Context';
import { useState } from 'react';
function App() {
  const [wishlistItem, SetwishlistItem] = useState([]);
  const datas = {
    wishlistItem,
    SetwishlistItem,
  };
 const router=createBrowserRouter(ROUTES)
  return (
    <div className="App">
      <MainContext.Provider value={datas}>

        <RouterProvider router={router}/>
      </MainContext.Provider>
  
    </div>
  );
}

export default App;
