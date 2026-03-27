import React from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../tabs/Home'
import Sales from '../tabs/Sales'
import Inventory from '../tabs/Inventory'
import Payments from '../tabs/Payments'
import Shipments from '../tabs/Shipments'

const AppRouter = () => {

    const router = createBrowserRouter([
        {
            path: '',
            element:<MainLayout/>,
            children:[
                {
                    path: '/',
                    element: <Sales/>
                },
                {
                    path:'/sales',
                    element: <Sales/>
                },
                {
                    path:'/inventory',
                    element: <Inventory/>
                },
                {
                    path: '/payments',
                    element: <Payments/>
                },
                {
                    path:'/shipments',
                    element:<Shipments/>
                }
            ]
        }
    ])

  return (
    <RouterProvider router={router} />
    
  )
}

export default AppRouter