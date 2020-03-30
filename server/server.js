const express = require("express");
const bodyParser = require("body-parser");
const total = require("./modules/calcTotal");
const history = require("./modules/calcHistory");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("server/public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// GET the equation input from the POST
// store a record of the transaction in HISTORY
app.get("/calcHistory", (req, res) => {
  res.send(history);
});
//capture total from equation input
//on completion send back OK
app.post("/calcTotal", (req, res) => {
  const calcTotal = req.body;
  console.log(calcTotal);
  const equationTotal = total(calcTotal);
  console.log(equationTotal);
  calcTotal.total = equationTotal;
  history.push(calcTotal);

  res.sendStatus(201);
});
// display on DOM when updated
// History stays when the page is refreshed
// History goes away when the server is restarted
app.listen(port, function() {
  console.log("Listening on Port", port);
  console.log("Equation", history);
});
