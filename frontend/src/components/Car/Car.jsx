import React from "react";
import './Car.css';
import {useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";


function Car(){
    

const [Data ,setData]= useState();


    useEffect(()=> {
        fetch('http://localhost:8000/api/Type', 
            {
                method:"GET", 
                headers: {
                    'Access-Control-Allow-Origin':'*',
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
    
            });
        }, [])
    
    

    if(typeof Data === "object"){
    return(
            <div>
                <Nav />
                <div>
                    <img className="imge1" src="https://www.wandaloo.com/files/2022/05/namx-pininfarina-presentent-le-premier-vehicule-roulant-a-l-hydrogene-huv-suv-front.jpg" alt="" />
                    <div  className="Reserve">
                      <p>Order</p>
                    </div>
                    
                    
                </div>
                <div class="flex flex-nowrap " 
                style={{
                 
                    paddingTop: '1%',
                    paddingBottom: '1%',
                }}
                >
                     {
                    Data.map((item, index) => (
                        
                         <div class="col">
                        <div class="Card ">
                        <img src='https://www.h2-mobile.fr/img/post-h2/namx-huv-suv-hydrogene_110522.jpg' class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{item.Type_Name}</h5>
                            <p class="card-text ">{item.Date_Creation.toString().split("T")[0]}</p>
                            { item.Detalles.map((element, index) => (
                            <>
                             <p class="card-text ">{element.Nom_Value} : {element.Value}</p>
                   
                              </>  
                            ))
                            }
                        
                            <a class="btn btn-primary" href={`/Chercher/${item._id}`}>Reserver</a>
                            </div>
                        </div>
                        </div>
                       
                        
                        
                    ))
                }
                 
                </div>
               
                
                

                <Footer />
            </div>
        
    );
    
}



}

export default Car;