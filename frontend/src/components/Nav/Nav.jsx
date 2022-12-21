import React from 'react';



export default function Nav(){

    return(
        <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
      <div className="px-6 w-full flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <button
            className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-5"
              role="img"
              src="https://media.licdn.com/dms/image/D4E0BAQEbafRlLT_rmQ/company-logo_200_200/0/1665360087321?e=1679529600&v=beta&t=SOCJ1JSo5fOqysRnNrSY4DmzgWFPPzJnubKIRZWJLv4"
              xmlns="https://media.licdn.com/dms/image/D4E0BAQEbafRlLT_rmQ/company-logo_200_200/0/1665360087321?e=1679529600&v=beta&t=SOCJ1JSo5fOqysRnNrSY4DmzgWFPPzJnubKIRZWJLv4"
              viewBox="0 0 448 512"
            >
              
            </svg>
          </button>
          <a class="navbar-brand text-blue-600" href="#!">
            <svg class="w-5 h-5 ml-2 lg:ml-0 mr-2"
            src="https://media.licdn.com/dms/image/D4E0BAQEbafRlLT_rmQ/company-logo_200_200/0/1665360087321?e=1679529600&v=beta&t=SOCJ1JSo5fOqysRnNrSY4DmzgWFPPzJnubKIRZWJLv4"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
             </svg>
          </a>
        </div>
        <div class="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
          <ul class="navbar-nav mr-auto lg:flex lg:flex-row">
            <li class="nav-item">
              <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#Car" data-mdb-ripple="true" data-mdb-ripple-color="light">Car</a>
            </li>
            <li class="nav-item">
              <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#Team" data-mdb-ripple="true" data-mdb-ripple-color="light">Team</a>
            </li>
            <li class="nav-item mb-2 lg:mb-0">
              <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="Car" data-mdb-ripple="true" data-mdb-ripple-color="light">Reserver</a>
            </li>
          </ul>
        </div>
        <div class="flex items-center lg:ml-auto">
          <button type="button" class="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Login</button>
          <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Sign up for free</button>
        </div>
      </div>
    </nav>
    )
}