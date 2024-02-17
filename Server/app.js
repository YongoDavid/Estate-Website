const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
app.listen(5500);

app.use(express.static('../client'))
app.use(morgan('dev'))
app.use((req,res,next)=>{
    console.log('server started')

    next()
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../client/index.html'));
});
app.use((req,res)=>{
    res.sendFile(path.join(__dirname , '../client/404.html'));
})
