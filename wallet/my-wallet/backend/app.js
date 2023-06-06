const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const createError = require("http-errors")
const cors = require("cors")
const exphbs = require('express-handlebars')

const walletRouter = require("./routes/wallet")
const syncdataRouter = require("./routes/syncdata")

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.engine('hbs', exphbs.engine({
    defaultLayout: 'main.hbs',
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', './views');

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser())

app.get('/', function (req, res, next) {
    res.render('home', { title: 'Express' });
})
app.use('/wallet', walletRouter)
app.use('/syncdata', syncdataRouter)

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;