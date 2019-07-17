const express = require('express');

const app = express();
app.listen(8080);

console.log('Express listening on port 8080');

app.use(express.static('./dist'));

// Static references
app.use('/css', express.static(__dirname + '/node_modules/materialize-css/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/materialize-css/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/vue/dist'))

// app.all('/', (req, res) => {
//     res.send();
// });