import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Statistics from './components/Statistics'
import Blogs from './components/Blogs'
import Jobs from './components/Jobs'
import AppliedJobs from './components/AppliedJobs'
import ErrorPage from './components/ErrorPage'
import JobDetails from './components/JobDetails'
import FeaturedJobs from './components/FeaturedJobs'


const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [

      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },

      {
        path: '/statistics',
        element: <Statistics />,
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobs />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/jobdetails',
        element: <JobDetails />
      },
      {
        path: '/featuredjobs',
        element: <FeaturedJobs />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
