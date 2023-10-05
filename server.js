const dotenv = require('dotenv');
const createError = require('http-errors')
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const connectToDatabase = require("./config/connection");
const nocache = require('nocache')
// const expressLayouts=require('express-ejs-layouts');

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const cookieParser = require('cookie-parser');

const app = express();
app.use(nocache())
const port = process.env.PORT||4000;

// view engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.use(expressLayouts);
// app.set('layout')
// app.locals.partialsDir="./views/partials/";
// app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.use(express.static(path.join(__dirname, "public")));

app.use(cookieParser())
app.use(
    session({
        secret:"secret key",
        resave : false,
        saveUninitialized:true
}))

app.use('/',userRouter);
app.use('/admin',adminRouter);


//mongodb connection
connectToDatabase();


//catch 404 and forward to error handler
app.use(function(req,res,next){
    next(createError(404))
});

app.use(function(err,req,res,next){
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development'?err :{};

    if(err.status === 404){
        res.status(404).render('error/404')
    }else if(err.status ===500){
        res.status(500).render('error/500')
    }else{
        res.status(400).render('error/400')
    }
})


app.listen(port, () => {
    console.log(`Listening to the server on http://localhost:${port}`);
});

