const express = require("express");

const https = require('https');

const app = express();


app.get("/", function(req,res){
const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=17ca61e969d1089cb20d857813cd3b58&units=metric"

https.get(url, function(response){ // response from the weather server back to us...
  console.log(response.statusCode);  // should be 200 for "A Okay"!

  response.on("data", function(data){ // data returned to us from the weather server...Yay!!
    //console.log(data);
    const weatherData = JSON.parse(data);  // parsing the data into our object waetherData...
    const temp = weatherData.main.temp;    // now we can use this data as we like...
    console.log(temp);
    const weatherDescription = weatherData.weather[0].description;
    const icon =  weatherData.weather[0].icon
    const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
    res.write("<p>The weather is currently " + weatherDescription + "  " + icon +  "</p>");
    res.write("<h1>The Temperature in London is " + temp + " degrees celcius.</h1>");
    res.write("<img src="+ imageURL +">");
    res.send(); // we can only use res.send() once!
    console.log("The Temperature in London is " + temp + " degrees celcius.");
    console.log(weatherDescription);
    // const object = {
    //   name: "Martin",
    //   favoriteFood: "Ramen"
    // }
    // console.log(JSON.stringify(object));

    });
  });
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
