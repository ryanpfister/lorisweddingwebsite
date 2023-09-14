// Load necessary packages
const express = require("express");
const fs = require('fs')

// express router 
const router = express.Router();

// respond with index.html when a GET request is made to the homepage
router.get("/", (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Wedding Instructions</title>
        <style>
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
  
          body {
            font-family: Arial, sans-serif;
            background-color: #F4F6F8;
            padding: 20px;
          }
  
          .container {
            max-width: 1440px;
            margin: 0 auto;
            background-color: #fff;
            padding: 40px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          }
  
          h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
          }
  
          h2 {
            color: #333;
            margin-top: 20px;
            margin-bottom: 10px;
          }
  
          p {
            line-height: 1.5;
            margin-bottom: 15px;
          }
  
          address {
            font-style: normal;
            margin-bottom: 15px;
          }
  
          ul {
            margin-left: 20px;
            margin-bottom: 15px;
          }
  
          li {
            margin-bottom: 5px;
          }
  
          @media only screen and (max-width: 600px) {
            .container {
              padding: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
            <div>
            <center>
            <h1 style="color: green">Instructions</h1>
            <object data=
    "https://wedding.rdpfister.com/uploads/Parking-Instructions.pdf" 
                    width="800"
                    height="500">
            </object>
        </center>
    </div>
        </div>
        




  
      </body>
      </html>
    `);
    res.end();
});

// route for handling PDF request
router.get("/ParkingInstructions", (req, res) => {
    //res.download("uploads/Parking-Instructions.pdf");
    res.sendFile(__dirname + '/uploads/Parking-Instructions.pdf');

});

// export router middleware and use it in app.js
module.exports = router;