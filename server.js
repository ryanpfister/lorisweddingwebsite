// Load necessary packages
const express = require("express");
  
// create an express app
const app = express();
  
// define PORT number to listen to the requests
const PORT = process.env.PORT || 3000;
  
// to serve files from uploads directory
app.use("/uploads", express.static("uploads"));
  
// express routes
app.use("/", require("./routes"));
  
// listen to requests
app.listen(PORT, () => console.log(`Server started running on PORT ${PORT}`));