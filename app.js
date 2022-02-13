const request =require('request')
const geocode = require('./utils/geocode')
const forecast =require("./utils/forecast")
// const url ="http://api.weatherapi.com/v1/current.json?key=8dc47391dfd94db682f195310220202&q=London&aqi=no"
// request({url: url, json:true }, (error,response)=>{
//     if(error){
// console.log("unable to connect to weather service");
//     }
//     else if(response.body.error){
// console.log("unable to find location");
//     }
//     else{
//  console.log(" the weather in " + response.body.location.name + " is " + response.body.current.condition.text);
//     }
   
// // console.log(response.body);
// // console.log(" the weather in " + response.body.location.name + " is " + response.body.current.condition.text);
// }) 



// const geourl="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5rdXNoMjAwMyIsImEiOiJja3o2a2pob3owYWFkMnFxbTF1ZmtnMXE5In0.To-1ijVHkTPcwxwJb42rrw&limit=1"
// request({uri:geourl,json:true},(error,response)=>{
//     if(error){
// console.log("NO network connection");
//     }else{
//         const latitude =response.body.features[0].center[1]
//         const longitude =response.body.features[0].center[0]
//         console.log(latitude,longitude);
//     }

// })

geocode("india",(error,data)=>{
console.log("error",error);
console.log("data",data);
})
forecast(-75.7088,44.1545,(error,data)=>{
    console.log("error",error);
    console.log("data",data);
})