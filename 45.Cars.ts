// Cars: write a function that stores information about a car in a object. the function should always 
// receive a manufacturer and a model name. it should then accept an arbitrary number of keyword arguments.
// call the function with the required information and two other name_value pairs, such as a color or an 
// optional feature. print the object that's returned to make sure all the information was stored correctly.

import { features } from "process";

function storeCarInfo(manufacturer: string, modelName: string, ...extraOption: { [key : string]: any } [] ): object {
    const CarInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }
  return CarInfo;
};

let answare = storeCarInfo('Honda', 'Civic', {color:'black'}, {features: ['navigation', 'power window']})

console.log(answare);




















