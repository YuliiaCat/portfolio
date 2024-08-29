import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import HomePage from './pages/HomePage.tsx'
import About from './components/About/About.tsx'
import Skills from './components/Skills/Skills.tsx'
import ProjectsList from './components/ProjectsList/ProjectsList.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'skills',
          element: <Skills />
        },
        {
          path: 'projects',
          element: <ProjectsList />
        },
      ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
