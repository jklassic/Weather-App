const city = document.querySelector('#city'),
form = document.querySelector('form'),
container = document.querySelector('.container'),
display = document.querySelector('.display'),
temp = document.querySelector('#temp'),
humidity = document.querySelector('#humidity'),
pressure = document.querySelector('#pressure'),
wind = document.querySelector('#wind')
long = document.querySelector('#lon')
lati = document.querySelector('#lat')
timezone = document.querySelector('#time')
submit= document.querySelector('#submit');


submit.addEventListener('click',()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=865606b1de168beea6e7cfc19918f4d6`).then(res=>(res.json())).then(data=>allData(data))

    const allData = (data)=>{
        const tempOutput = Math.floor(data.main.temp-273.15)
        temp.innerHTML =`${tempOutput}°C`
        humidity.innerHTML =`${ data.main.humidity}%`
        pressure.innerHTML = `${data.main.pressure}Pa`
        wind.innerHTML = `${data.wind.speed}m/s`
        long.innerHTML = `${data.coord.lon}°`
        lati.innerHTML = `${data.coord.lat}°`
        timezone.innerHTML = `${data.dt}`

    }

    container.style.display = 'block'


})




form.addEventListener('submit',(e)=>{
    e.preventDefault()
})

city.addEventListener('input', ()=>{
    display.innerHTML = city.value
})