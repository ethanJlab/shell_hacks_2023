import React from 'react'
import ReactDOM from 'react-dom/client'
import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import LandingPage from './pages/Landing.tsx'
import DashboardPage from './pages/Dashboard.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

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
    <Auth0Provider
      domain='dev-xhc2dcreaqasyjnj.us.auth0.com'
      clientId='h7C3ao2SQuA5pX2I54fP2Pa7lER1lbd3'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <RouterProvider router={kevsRouter}/>
    </Auth0Provider>
    
  </React.StrictMode>,
)
