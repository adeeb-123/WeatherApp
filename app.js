/* -------------------------< Weather App with Backend >------------------------- */

const express = require('express')
const app = express();
const port = process.env.PORT || 9000
const hbs = require('hbs')

// const port = process.env.PORT || 800 This is for when you host your website out of your system or public


// Static Files
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/img',express.static(__dirname + 'public/img'))

// Set views
app.set('views','./views')
app.set('view engine','hbs')

// Partials 
hbs.registerPartials(__dirname + '/views/partials')


app.get('/',(req,res)=>{
    // res.send("Weather App : Home Page")
    res.render('index')
})

app.get('/weather',(req,res)=>{
    // res.send("Weather App : About Page")
    res.render('weather')
})

app.get('/about',(req,res)=>{
    // res.send("Weather App : Weather Page")
    res.render('about')
})



app.get('*',(req,res)=>{
    // res.send("OOPssss .......... 404 : Page NOT Found")
    res.render('404error',{
        errorMsg:"Opps! Page Not Found"
    })
})



app.listen(port,()=>{
    console.log(`Listening port at ${port}`)
})