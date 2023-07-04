import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'

export const ErrorPage = () => {
  return (
    <div className="min-h-[100vh] w-full flex flex-col light-source">
         <Navbar />
         <main className="h-[100vh] flex-1 grid">
            <span className='justify-self-center self-center' >Page Does not Exit</span>
         </main>
         <Footer/>
      </div>
  )
}
