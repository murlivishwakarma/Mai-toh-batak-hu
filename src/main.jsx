import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contacts from './pages/Contacts.jsx';
import Skills from './pages/Skills.jsx'
import {GifContextprovider} from './components/GifContext.jsx';

const router = createBrowserRouter([
{
 path:"/",
 element:<Home/>},
{
 path:"/Skills",
 element:<Skills/> },
 {
 path:"/Contacts",
 element:<Contacts/>},
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GifContextprovider>
      <RouterProvider router={router} />
    </GifContextprovider>
  </StrictMode>
);
