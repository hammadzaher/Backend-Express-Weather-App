import express from 'express'
import cors from "cors";
const app = express()
const port = process.env.PORT || 5001;
/// 192.168.0.115:3000

app.use(cors());
app.get('/', (req, res) => {
    console.log(req.ip)
  res.status(200).send('Hello World Hammad zaheer Han Bhai!')
});

app.get('/weather.app/:city', (req, res) => {

  const city = req.params.city

  let apiRes = {};

  if(city == "karachi"){
    apiRes = {
      "Temperature": 40,
      "Humidity": 58,
      "FeelsLike": "32.2°C", 
      "Country": "Pakistan",
      "City": city,
      "Provience": "Sindh",
      "Wind Speed": "5kmp/h",
      "Visibility": "23 km"
    }
  }else if(city == "lahore"){
    apiRes = {
      "Temperature": 40,
      "Humidity": 58,
      "FeelsLike": "32.2°C", 
      "Country": "Pakistan",
      "City": city,
      "Provience": " Punjab",
      "Wind Speed": "5kmp/h",
      "Visibility": "23 km"
    }
  }else if(city == "Faisalabad"){
    apiRes = {
      "Temperature": 40,
      "Humidity": 58,
      "FeelsLike": "32.2°C", 
      "Country": "Pakistan",
      "City": city,
      "Provience": " Punjab",
      "Wind Speed": "5kmp/h",
      "Visibility": "23 km"
    }
  }else if(city == "Rawalpindi"){
    apiRes = {
      "Temperature": 40,
      "Humidity": 58,
      "FeelsLike": "32.2°C", 
      "Country": "Pakistan",
      "City": city,
      "Provience": " Punjab",
      "Wind Speed": "5kmp/h",
      "Visibility": "23 km"
    }
  }else if(city == "Gujranwala"){
    apiRes = {
      "Temperature": 40,
      "Humidity": 58,
      "FeelsLike": "32.2°C", 
      "Country": "Pakistan",
      "City": city,
      "Provience": " Punjab",
      "Wind Speed": "5kmp/h",
      "Visibility": "23 km"
    }
  }else if(city == "Multan"){
    apiRes = {
      "Temperature": 40,
      "Humidity": 58,
      "FeelsLike": "32.2°C", 
      "Country": "Pakistan",
      "City": city,
      "Provience": " Punjab",
      "Wind Speed": "5kmp/h",
      "Visibility": "23 km"
    }
  }else if(city == "Hyderabad"){
    apiRes = {
      "Temperature": 40,
      "Humidity": 58,
      "FeelsLike": "32.2°C", 
      "Country": "Pakistan",
      "City": city,
      "Provience": "Sindh",
      "Wind Speed": "5kmp/h",
      "Visibility": "23 km"
    }
  }else if(city == "Peshawar"){
    apiRes = {
      "Temperature": 40,
      "Humidity": 58,
      "FeelsLike": "32.2°C", 
      "Country": "Pakistan",
      "City": city,
      "Provience": " Khyber Pakhtunkhwa",
      "Wind Speed": "5kmp/h",
      "Visibility": "23 km"
    }
  }else if(city == "Quetta"){
    apiRes = {
      "Temperature": 40,
      "Humidity": 58,
      "FeelsLike": "32.2°C", 
      "Country": "Pakistan",
      "City": city,
      "Provience": " Balochistan",
      "Wind Speed": "5kmp/h",
      "Visibility": "23 km"
    }
  }else if(city == "Islamabad"){
    apiRes = {
      "Temperature": 40,
      "Humidity": 58,
      "FeelsLike": "32.2°C", 
      "Country": "Pakistan",
      "City": city,
      "Provience": "Islamabad Capital Territory",
      "Wind Speed": "5kmp/h",
      "Visibility": "23 km"
    }
  }else{
    apiRes = {
      "Temperature": 40,
    "Humidity": 58,
    "FeelsLike": "32.2°C", 
    "Country": "Pakistan",
    "City": city,
    "Provience": "Sindh",
    "Wind Speed": "5kmp/h",
    "Visibility": "23 km"
    }
  }

  res.send(apiRes)

  res.send({
   
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
