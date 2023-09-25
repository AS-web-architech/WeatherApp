const url = '​https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Karachi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d4a9ae54fmshd93d64c4f9670d1p1873c0jsna6ef7937fdaf',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
    cityName.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
    .then(response => response.json())
    .then(response => {
     
     console.log(response)
     temp.innerHTML = response.temp
     humidity.innerHTML = response.humidity
     min_temp.innerHTML = response.min_temp
     max_temp.innerHTML = response.max_temp
     wind_speed.innerHTML = response.wind_speed
     wind_degrees.innerHTML = response.wind_degrees
     
 
    })
    .catch(err => console.error(err))
}

submit.addEventListener('click',(e)=>{
  e.preventDefault() 
  getWeather(city.value)
})
getWeather('karachi')