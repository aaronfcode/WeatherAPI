const express = require('express')
const fetch = require('node-fetch')
const app = express();


let city = 'Toronto'
const url= `http://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=236bc05c1ab1689a1783fb805b8db2b8`


const getData = async url => {
    try{
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
    }catch(error){
        console.log(error)
    }
}

getData(url);