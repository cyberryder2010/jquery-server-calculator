const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("server/public"));

//compute VALUE from input fields
//send VALUE object to the server via POST
//on completion send back OK
// GET the actual calculation from the POST
// store a record of the transaction in HISTORY
// display on DOM when updated
// History stays when the page is refreshed but goes away when the server is restarted
app.listen(port, function() {
  console.log("Listening on Port", port);
});
