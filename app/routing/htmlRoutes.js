const express = require("express");
const path = require('path');
var router = express.Router();

//declaring home page rout
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'home.html'));
});

//declaring survey page rout
router.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'survey.html'));
});

//exporting html routs
module.exports = router;
