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
      <html>
      <meta name="title" content="John & Lori's Wedding Parking Instructions">
      <meta name="description" content="Parking instructions for John & Lori's Wedding">
      <center>
      <h1> JOHN & LORI's WEDDING PARKING INSTRUCTIONS </h1>
      <div id="adobe-dc-view" style="width: 800px;"></div>
      <script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
      <script type="text/javascript">
          document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
              var adobeDCView = new AdobeDC.View({clientId: "927f8ab99a994083a4e0f931b8c1afc2", divId: "adobe-dc-view"});
              adobeDCView.previewFile({
                content:{location: {url: "https://wedding.rdpfister.com/uploads/Parking-Instructions.pdf"}},
                metaData:{fileName: "Parking-Instructions.pdf"}
            }, {embedMode: "IN_LINE"});
          });
      </script>

      </center>
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