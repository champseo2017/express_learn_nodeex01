const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

// app.use(bodyParser.urlencoded({ extended:true }));
// app.use(bodyParser.json({ type:'*/*' }));

// use Middleware 
// middleware สามารถ handle เฉาพะ route ที่เราต้องการได้โดยในที่นี้มันจะทำงานเฉาพะกับ 
// route/order เท่านั้นครับ
app.use('/order', (req, res, next) =>{
    console.log('middle ware for order');
    next();
});

app.get('/member', (req, res) =>{
    console.log("Member page")
    res.send("Member Page")
});

app.get('/order', (req, res) =>{
    console.log("order page")
    res.send("Hello world nodeemon")
});

// // send request GET url /order/:orderId
// app.get('/order/:orderId', (req, res)=>{
//     res.send('Order Oage Id=' + req.params.orderId);
// });

// // send request post use Middleware library body-parser
// app.post('/order', (req, res) =>{

//     console.log(req.body);
//     res.json({ status: 'ok' });

// })

app.listen(8000, () =>{
    console.log("ready on http://localhost:8000");
});