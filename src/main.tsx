import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import HomePage from './pages/HomePage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
      ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
