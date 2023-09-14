// Load necessary packages
const express = require("express");
  
// express router 
const router = express.Router();
  
// respond with index.html when a GET request is made to the homepage
router.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});
  
// route for handling PDF request
router.get("/downloadPDF", (req, res) => {
    res.download("uploads/Resume.pdf");
});
  
// export router middleware and use it in app.js
module.exports = router;