const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/menu.html');
});

app.get('/unknown', function(request, response) {
  response.sendFile(__dirname + '/views/unknown.html');
});

app.get('/notebook', function(request, response) {
  response.sendFile(__dirname + '/views/notebook.html');
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
 
