const request =  require('request')
const forecast =(latitude,longitude,callback)=>{
    const url ="http://api.weatherapi.com/v1/current.json?key=8dc47391dfd94db682f195310220202&q="+latitude +','+ longitude + "&aqi=no"
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("unable to connect to weather service",undefined)
        }else if (response.body.error){
          callback("unable to find location",undefined)
        }else{
            callback(undefined," the weather in " + response.body.location.name + " is " + response.body.current.condition.text)
        }
    })


}
module.exports = forecast