const http = require('http');
const express = require('express');
const path = require('path');
const snapshot_route = require('./routes/snapshot.route')
const app = express();
const fs = require('fs');
app.use(express.json());
app.use(express.static("express"));
// default URL for website
app.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname + '/express/index.html'));
  //__dirname : It will resolve to your project folder.
});
app.get("/get_snapshot", function (req, res) {
  // TODO: Move this to another router
  var files = fs.readdirSync('./snapshots/');
  console.log(files);
  file_name = files[0]
  const jsonString = fs.readFileSync("./snapshots/" + file_name);
  const data = JSON.parse(jsonString);
  res.json(data);
});
const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);