
  
function GetLocationData() {
    navigator.geolocation.getCurrentPosition(function(location) {
        var latitude = location.coords.latitude;
        var longitude = location.coords.longitude;
        var accuracy = location.coords.accuracy;
      });

    //VARIABLES
    var ajaxRequest = new XMLHttpRequest;
    var url = 'https://api.weather.gov/points/{latitude},{longitude}';
    var runAsyncronously = true;

    //Setup request
    ajaxRequest.open('GET', url, runAsyncronously);

    //Call back function


    //Send request-wait for response
}//end api function

