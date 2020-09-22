/*=====================================================================================================
                                           2nd Permutation
                                News letter app using Mail Chimp API
                            Can use it for www.martyskypepianolessons.com
                                          MODULES USED:
  =====================================================================================================*/
//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require('https');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true})); // necessary code to parse the body of the request...

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});


app.post("/", function(req, res){

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  // data object...
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {   // merge_fields object...
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  } // END OF DATA OBJECT

  const jsonData = JSON.stringify(data);

  const url = "https://us2.api.mailchimp.com/3.0/lists/ddcb084ad6";

  const options = {  // JavaScript Object...
    method: "POST",
    auth: "marty:74a913032c0e4e4cd38c121347224477-us2"  // my API key....us2 is one of their servers...they have many
  }

  const request = https.request(url, options, function(response) {

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function(data){
      console.log(JSON.parse(data));
    });
  });
  //console.log(firstName, lastName, email);

request.write(jsonData);
request.end();

}); // END OF app.post

/*===========================================
            RESPECTIVE ROUTES
 ===========================================*/
app.post("/failure", function(req, res){
  res.redirect("/");
});

app.post("/success", function(req, res){
  res.redirect("/");
});


// run the server
app.listen(3000, function(){
  console.log("Server is running on port 3000");
});



/*--------------------------------------------------------------
                          MAIL CHIMP
API Key
74a913032c0e4e4cd38c121347224477-us2

List ID
ddcb084ad6
---------------------------------------------------------------*/
