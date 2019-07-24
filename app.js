const express = require('express');
const app = express()

const baner = require('./api/routes/baner');
const category = require('./api/routes/category');
const chapter = require('./api/routes/chapter');
const link = require('./api/routes/link');
const manga = require('./api/routes/manga');
const mangacategory = require('./api/routes/mangacategory');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.use('/baner',baner);
// app.use('/category',category);
// app.use('/chapter',chapter);
// app.use('/link',link);
// app.use('/manga',manga);
// app.use('/mangacategory',mangacategory);

app.get('/',(req,res,next)=>{
    res.status(200).json({
        mesage : "mesage"
    })
})

module.exports = app;