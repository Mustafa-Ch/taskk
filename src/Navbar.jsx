import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
function Navbar() {
    const state=useSelector((state)=>state.cart)
  return (
   <>
    <nav class="bg-gray-800 flex justify-center">
 
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
      
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
         
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
           
            <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">food</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">bavours</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">burger</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">sandwich</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Cart Items{state.length}</a>
          </div>
        </div>
      </div>
      
    </div>
  </div>

 
 
</nav>
   </>
  )
}

export default Navbar
