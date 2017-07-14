var express = require('express');
var app = express();

app.set('port', process.argv[2] || 3000);

app.listen(app.get('port'), () => {
    console.log(`ExpressJS server listening to port ${app.get('port')}`);
});