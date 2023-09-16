import React from 'react'
import ReactDOM from 'react-dom/client'
import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import LandingPage from './pages/Landing.tsx'
import DashboardPage from './pages/Dashboard.tsx'

const kevsRouter = createBrowserRouter([
  {
    path:"/",
    element: <LandingPage/>,
  },

  {
    path:"/App",
    element:<App/>
  },

  {
    path:"/Dashboard",
    element: <DashboardPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={kevsRouter}/>
  </React.StrictMode>,
)
