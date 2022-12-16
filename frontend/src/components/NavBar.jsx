import React from 'react'
import logo from "../imgs/logo-namx.svg";

function NavBar() {
  return (
    <>
         <header class="text-gray-600 body-font absolute top-0 flex justify-between align-center">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a  href='/'
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src={logo}
              className="w-24 h-24 flex justify-start "
                alt="logo"
            />
          </a> 
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href='/' class="mr-5 hover:text-gray-900">Home</a>
            <a  href='/' class="mr-5 hover:text-gray-900">Second Link</a>
            <a  href='/' class="mr-5 hover:text-gray-900">Third Link</a>
            <a  href='/' class="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>  
        
    </>
  )
}

export default NavBar