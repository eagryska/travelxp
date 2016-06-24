/* eslint-disable */

$(document).ready(init);

function init() {
  fetchWeather();
}

function fetchWeather() {
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $('#cityName').text() + '&units=imperial&appid=1f00be6bd9908243ddc7bd08b1dc1c3e',
    method: 'get',
    dataType: 'json',
    success: function(rsp){
      let weather = rsp.weather[0].main;
      let weatherIconUrl = `http://openweathermap.org/img/w/${rsp.weather[0].icon}.png`;
      let tempLo = rsp.main.temp_min;
      let tempHi = rsp.main.temp_max;
      let tempCurr = rsp.main.temp;
      $('#weather').append(`<div class='row'><div class='col-xs-4'><table class='table table-bordered'><tr><td class='active'>Current Temperature</td><td>${tempCurr}</td></tr>` +
      `<tr><td class='active'>Weather</td><td>${weather}<img src=${weatherIconUrl}></td></tr>`+
      `<tr><td class='active'>Low Temperature</td><td>${tempLo}</td></tr>`+
      `<tr><td class='active'>High Temperature</td><td>${tempHi}</td></tr></table></div></div>`);
    }
  });
}
