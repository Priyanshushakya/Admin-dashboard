import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">


      <div className="w-64">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-auto p-4">
        <Outlet />
      </div>

    </div>
  )
}

export default MainLayout