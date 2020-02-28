var express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var cors=require('cors');
var routes=require('./routes/route')
var app=express();

app.use(bodyParser.json());
app.use(cors());




app.listen(3000);

console.log('connected on 3000')
mongoose.connect('mongodb://localhost:27017/EMS',{ useUnifiedTopology: true,useNewUrlParser: true});


mongoose.connection.on('connected',()=>{
    console.log('connected to 27017 port')
})

mongoose.connection.on('error',(error)=>{
    if(error)
    throw error;
});
app.use('/ems',routes);

