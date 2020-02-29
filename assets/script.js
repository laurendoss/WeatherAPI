var APIkey = "1f527b67c4301844667af94e9756e077"; 
var queryURL; 
var city = "London"; 

function cityWeather (city) {
// queryURL = "api.openweathermap.org/data/2.5/forecast?"+ "q=" + city + "&appid=" + APIkey; 
queryURL =  'https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?appid='+ APIkey +'&q='+ city +'&count=10';

console.log(queryURL)
$.ajax({
url: queryURL, 
method: "GET" ,
headers: {
"Access-Control-Allow-Origin": "*"
} 
}).then(function(response) {
console.log(response); 
})
};

cityWeather(city); 


    // var appID = "1309b5e9e4f1e1f47098c6f9d717d4a2";
    // $(".query_btn").click(function(){
    //     var query_param = $(this).prev().val();
    //     if ($(this).prev().attr("placeholder") == "City") {
    //         var weather = "http://api.openweathermap.org/data/2.5/weather?q=" + query_param + "&APPID=" + appID;
    //     } else if ($(this).prev().attr("placeholder") == "Zip Code") {
    //         var weather = "http://api.openweathermap.org/data/2.5/weather?zip=" + query_param + "&APPID=" + appID;
    //     }
    //     $.getJSON(weather,function(json){
    //         $("#city").html(json.name);
    //         $("#main_weather").html(json.weather[0].main);
    //         $("#description_weather").html(json.weather[0].description);
    //         $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
    //         $("#temperature").html(json.main.temp);
    //         $("#pressure").html(json.main.pressure);
    //         $("#humidity").html(json.main.humidity);
    //     });