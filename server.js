const nodemailer = require("nodemailer");
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000
const path = require("path");
const cors = require('cors')
const multipart = require('connect-multiparty');

app.use(cors());
app.use(express.static(`${__dirname}/./build`));
app.use(express.static(`${__dirname}/./static`));
app.set('secretKey', 'key'); // jwt secret token
app.use(logger('dev'));
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", async function (req, res) {
    try {
        res.sendFile(path.join(__dirname, './build/index.html'));
    } catch (error) {
        res.sendFile(path.join(__dirname, './static/not_found.html'));
    }
})
app.listen(port, function () {
    console.log('Node server listening on port ' + port);
});