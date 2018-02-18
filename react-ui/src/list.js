import React, { Component } from 'react';

const generateCars = ({carslist}) => {
   // console.log(Object.values(carslist)[0])
   
   
   console.log(carslist)

   if (carslist) {
    return carslist.map((item) => {
        return (
          
           <option key={item._id}>{item.brand}</option>
           
        )
    })
}
}
const List = (props) => {


    return (
         <div className="home_block"><select>{generateCars(props)}</select></div>
    )
} 
    
export default List;