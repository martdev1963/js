const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// GET ROUTE that send's the browser the word Hello...
// HOME ROUTE

app.set("view engine", "ejs");

app.get("/", function(req, res){
  //var a = 3*5;
  //res.send("Hello " + a); // response object to respond to the browser...
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";
 console.log(currentDay);

 switch (currentDay) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
  console.log("Error: current day is equal to: " + currentDay);
}
// if you have more than five if /else statements then use a switch statement
// if you have less then that, then use if /else statements...
  // if (currentDay === 0){
  //   day = "Sunday";
  // }
  // else if (currentDay === 1){
  //   day = "Monday";
  // }
  // else if (currentDay === 2){
  //   day = "Tuesday";
  // }
  // else if (currentDay === 3){
  //   day = "Wednesday";
  // }
  // else if (currentDay === 4){
  //   day = "Thursday";
  // }else if (currentDay === 5){
  //   day = "Friday";
  // }
  // else {
  //   day = "Saturday";
  // }
  //if (currentDay === 6 || currentDay === 0){ // getDay returns day of the week as an integer
//    day = "Weekend";
    //res.write("<h1>Yay! Its the week-end!</h1>"); //  6 is Saturday, 0 is Sunday (ergo, first day of the week)}
    //res.sendFile(__dirname + "/weekEnd.html");
//  } else {
//    day = "Weekday";
    // res.write("<p1>Boo! I have to work! Its not the week-end baaaaaa hummmmmm Bug!!!</p1>");
    // res.write("<h1>Boo! I have to work!</h1>");
    //res.sendFile(__dirname + "/index.html");
    //res.send();
//  }
    res.render("list", {kindOfDay: day});

});



app.listen(3000, function(){
  console.log("Server started on port 3000");
});
