import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const UserLayout = () => {
  return (
    <div  className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow container mx-auto max-w-300 px-4 md:px-6 py-10">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default UserLayout