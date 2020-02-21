const express = require('express')
const fetch = require('node-fetch')
const app = express();
const bodyParser = require('body-parser')

// Middleware 
app.set("view engine", 'ejs')
app.use(express.static('css'))
app.use(bodyParser.urlencoded({extended: true}))


// Routes
app.get('/', (req,res) => {
  const city = req.query.city_name
  const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=236bc05c1ab1689a1783fb805b8db2b8`
  fetch(url)
  .then((res) => res.json())
  .then((data)=> {
      // console.log(data)
    let weather = {
      city: req.query.city_name,
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      icon: data.weather[0].icon
  }
  let weather_data = {weather : weather}
  res.render('weather', weather_data)
  })
})

// Declaring PORT
const port = process.env.PORT || 3000; // PORT is an environment variable that will be set by the process obj
// Set up listener
app.listen(port, () => {console.log(`Listening on ${port}...`)})
