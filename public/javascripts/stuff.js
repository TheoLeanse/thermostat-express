// HERE BEGINS THE ORIGINAL APP CODE:

var updateDisplay = function() {
  $('#temperature').html(thermostat.temp);
  $('#temperature').css('color', thermostat.colour);
};

thermostat = new Thermostat();
updateDisplay(); // window.onload ...?

// if you can add multiple event listeners at the same time, add up-arrow?

$('#up').click(function() {
  thermostat.increase();
  updateDisplay();
});

$('#down').click(function() {
  thermostat.decrease();
  updateDisplay();
});

$('#reset').click(function() {
  thermostat.resetTemp();
  updateDisplay();
});

$('#powersaver').click(function() {
  thermostat.powerSave = !thermostat.powerSave;
});

// touchscreen clickwheel for mobile?

// function openweatherAPICall(latitude, longitude) {
//   return 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude;
// }
//
// var apiCall = openweatherAPICall(latitude, longitude);


// return formatted address for lat/longitude - reverse geocoding with Google Maps API
// adjust thermostat accordingly
