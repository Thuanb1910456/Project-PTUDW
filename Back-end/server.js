require('dotenv').config();
//connect DB
const { connectDB } = require('./configs/db');
const connection = connectDB();
//express - cors - bodyParser
const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());
//route
const Auth = require("./routes/auth");
app.use('/api',Auth);
const Products = require("./routes/products");
app.use('/api/store',Products);
const Class = require("./routes/class");
app.use('/api/class',Class);
//not found route
const {errorHandler} = require("./middleware/errorHandler");
app.all('*',(req,res,next)=>{
    const err = new Error('Router can not be found');
    err.statusCode = 404; 
    next(err);
});
app.use(errorHandler);
//port
const port = process.env.APP_PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})