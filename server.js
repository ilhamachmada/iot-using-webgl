const express = require('express');
const path = require('path');

const app = express();

const armRobotView = require('./routes/arm-robot');
const virtualFarm = require('./routes/virtual-farm');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(armRobotView);
app.use(virtualFarm);
//root url harus bawah sendiri

app.use((req,res,next) => {
    res.status(404).render('404', {pageTitle: '404 Error'});
});

app.listen(3000, () => {
    console.log('server connected');
});