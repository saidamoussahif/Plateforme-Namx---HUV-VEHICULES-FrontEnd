
import React from "react";
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer";

import { useForm } from "react-hook-form";



export default function Reservation(){
         const { register, handleSubmit, reset } = useForm();
        
        const onSubmit = (data) => {
         
            fetch("http://localhost:8000/api/Reservation", {
              method: "POST",
              body: JSON.stringify({
                UserName: data.UserName,
                Adress: data.Adress,
                City: data.City,
                state: data.state,
                Zip: data.Zip,
                Country: data.Country,
                Type: data.Type
        
              }),
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((response) => response.json())
              .then((data) => console.log(data));
              
            reset();
          };

       
           
    
    
       
     
   

     
            return(

                  <div>
                  <Nav />
                  <h1 class="font-medium leading-tight text-3xl mt-0 mb-10 text-center">Reserver</h1>
                  <div className="flex">
                  <form  
                    method="post"
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-6/12 mt-10 mb-40">
                    <div class="relative mb-6 w-full group">
                        <input type="text"  {...register("UserName")}  name="UserName" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div class="relative z-0 mb-6 w-full group">
                        <input type="text" {...register("city")} name="City" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                    </div>
                    <div class="relative z-0 mb-6 w-full group">
                        <input type="text" {...register("Adress")} name="Adress" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Adress</label>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                      <div class="relative z-0 mb-6 w-full group">
                          <input type="text"  {...register("state")} name="state" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                          <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State</label>
                      </div>
                      <div class="relative z-0 mb-6 w-full group">
                          <input type="text" {...register("Zip")} name="Zip" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                          <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Zip</label>
                      </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                      <div class="relative z-0 mb-6 w-full group">
                          <input type="text" {...register("Country")} name="Country" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                          <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
                      </div>
                      <div class="relative z-0 mb-6 w-full group">
                          <input type="text" {...register("Typ")} name="Type" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" value="Huv1" required hidden />
                          <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type Car</label>
                      </div>
                    </div>
                    <button type="submit" value="Add" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                  </form>
                  <div className="overflow-hidden transition-shadow duration-300 w-5/12 ml-6 h-96 bg-white rounded">
                            <a  aria-label="Article">
                              <img
                                src="https://cdn.motor1.com/images/mgl/RqqY1e/s3/namx-huv-il-suv-a-idrogeno-disegnato-da-pininfarina.webp"
                                className="object-cover w-full h-96 rounded"
                                alt=""
                              />
                            </a>
                  </div>
                  </div>
                  <Footer/>

                  </div>
            );
                

}








