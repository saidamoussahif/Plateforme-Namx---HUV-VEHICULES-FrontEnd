import React from 'react'
import Nav from '../Nav/Nav'
import './Home.css';


export default function Home(){
    return(

        <div>

  <Nav />
  <section className="mb-40 bg-gray-50">
    

    <div
    
    
    className='Background text-center py-24 px-6 text-gray-900'
     >
      <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">HUV NAMX <br /><span class="text-blue-600">CARS OF THE FUTURE</span></h1>
      <a class="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
      
    </div>
    <h3 class="font-medium leading-tight text-3xl mt-0 mb-10 text-center text-blue-500">Teame</h3>
    <div class="flex flex-wrap justify-around">
        <div className='text-center'>
        <img
            src="https://avatars.githubusercontent.com/u/93975470?v=4"
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
        />
        <h5 class="text-xl font-medium leading-tight mb-2">Saida Moussahif</h5>
        <p class="text-gray-500">Full Stack JavaScript</p>
        </div>
        <div className='text-center'>
        <img
            src="https://avatars.githubusercontent.com/u/93976857?s=400&u=b975472e27b3f92812a9973e6dae8cc0655399fd&v=4"
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
        />
        <h5 class="text-xl font-medium leading-tight mb-2">Ayoub Benouahi</h5>
        <p class="text-gray-500">Full Stack JavaScript</p>
        </div>
        <div className='text-center'> 
        <img
            src="https://avatars.githubusercontent.com/u/93930498?v=4"
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
        />
        <h5 class="text-xl font-medium leading-tight mb-2">Berkania Rasha kbir</h5>
        <p class="text-gray-500">Full Stack JavaScript</p>
        </div>
  
 
</div>


        
    
  </section>


</div>

    );
}
