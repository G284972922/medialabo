let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう{
  console.log(data.coord.lon); 
  console.log(data.coord.lat); 
  console.log(data.weather[0].description);
  console.log(data.main.temp_min); 
  console.log(data.wind.speed);
  console.log(data.wind.deg);
  console.log(data.name);

  let Re=document.querySelector('div#result');
  let p1 = document.createElement('p'); 
  p1.textContent =data.coord.lon;
  Re.insertAdjacentElement('beforeend', p1);

  let p2 = document.createElement('p'); 
  p2.textContent =data.coord.lat;
  Re.insertAdjacentElement('beforeend', p2);

  let p3 = document.createElement('p'); 
  p3.textContent =data.weather[0].description;
  Re.insertAdjacentElement('beforeend', p3);
  
  let p4 = document.createElement('p'); 
  p4.textContent =data.main.temp_min;
  Re.insertAdjacentElement('beforeend', p4);
  
  let p5 = document.createElement('p'); 
  p5.textContent =data.wind.speed;
  Re.insertAdjacentElement('beforeend', p5);

  let p6 = document.createElement('p'); 
  p6.textContent =data.wind.deg;
  Re.insertAdjacentElement('beforeend', p6);

  let p7 = document.createElement('p'); 
  p7.textContent =data.name;
  Re.insertAdjacentElement('beforeend', p7);

  let a = document.querySelector('#serchBotton');
  a.addEventListener('click',serch );

  function serch() {
    let x = document.querySelector('input[name="KensakuWord"]');
    let y =x.value;
    let z = document.querySelector(y);
  }