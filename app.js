const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
console.log(path.join(__dirname, '/static'));
app.use(express.static(path.join(__dirname, '/static')));

// refactor routes later
/* var routes = require('./routes/routes');
routes.init(app); */

app.get('/', (req, res) => {
    res.sendFile('static/main.html', {root: __dirname});
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});