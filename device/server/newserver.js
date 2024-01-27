var express = require('express');
var app = express();

//console.log(process)
//app.get('/', function (req, res) {
    //res.send('<b>My</b> first express http server');
//});
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});
app.listen(8080, function() {
  console.log('porta 8080 em uso!')
});
function nlop () {
  
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});


const keeper = require('./flip.js');
keeper.run();
const device = require('/home/runner/projecA/device/core/main/index.js');

}
nlop();