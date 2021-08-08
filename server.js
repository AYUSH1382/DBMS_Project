const express = require("express");
const Handicraft  = require("./models/HandModel");
const db = require("./db");
const app=express();

app.use(express.json());
const path = require('path')
const handicraftRoute = require('./routes/handicraftRoute');
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')


app.use('/api/handicrafy/',handicraftRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/', ordersRoute)

if(process.env.NODE_ENV === 'production')
{
    app.use('/', express.static('client/build'))

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'client/build/index.html'))
    })
}



// app.get("/",(req,res)=>{
//     res.send("Server working ");
// });

/*app.get("/getHandicraft",(req,res)=>{
    Handicraft.find({}, (err,docs)=>{

        if(err){
            console.log(err);
        }
        else{
            res.send(docs);
        }
    }) 
});*/

const port = process.env.PORT || 5000;

app.listen(port,()=> `Server running on port ${port}`);
