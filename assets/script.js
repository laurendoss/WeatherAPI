// var APIkey = "1f527b67c4301844667af94e9756e077"; 
// var queryURL; 
// var city = "London"; 

// function cityWeather (city) {
// // queryURL = "api.openweathermap.org/data/2.5/forecast?"+ "q=" + city + "&appid=" + APIkey; 
// queryURL =  'https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?appid='+ APIkey +'&q='+ city +'&count=10';

// console.log(queryURL)
// $.ajax({
// url: queryURL, 
// method: "GET" ,
// headers: {
// "Access-Control-Allow-Origin": "*"
// } 
// }).then(function(response) {
// console.log(response); 
// })
// };

// cityWeather(city); 
function cityWeather () {
var query_param = "seattle";
var appID = "7e3c3133d43434fd9718ed5fb937a08d";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + query_param + "&APPID=" + appID
$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(response) {

//Transfer content to HTML
var tempF = (response.main.temp - 273.15) * 1.80 + 32;
var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");

$(".cityName").text(response.name); 
$(".cityIcon").append(img); 
$(".cityHumidity").text("Humidity: " + response.main.humidity); 
$(".cityTemperature").text("Temperature: " + tempF.toFixed(1) + "F"); 
$(".cityWindSpeed").text("Wind Speed: " + response.wind.speed); 
$(".cityUV").text()
})
}
cityWeather()

function cityForecast () {
    var query_param = "seattle";
    var appID = "7e3c3133d43434fd9718ed5fb937a08d";
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + query_param + "&APPID=" + appID; 
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
    console.log(response)
    
    
    //Transfer content to HTML for day 1

    var tempF1 = (response.list[6].main.temp - 273.15) * 1.80 + 32;
    var img1 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[1].weather[0].icon + ".png");
    
    $(".dayOneDate").text("Date: " + response.list[1].dt_txt[0]+response.list[1].dt_txt[1]+response.list[1].dt_txt[2]+
    response.list[1].dt_txt[3]+response.list[1].dt_txt[4]+response.list[1].dt_txt[5]+response.list[1].dt_txt[6]+
    response.list[1].dt_txt[7]+response.list[1].dt_txt[8]+response.list[1].dt_txt[9]); 
    $(".dayOneIcon").append(img1); 
    $(".dayOneHumidity").text("Humidity: " + response.list[1].main.humidity); 
    
    $(".dayOneTemp").text("Temperature: " + tempF1.toFixed(1) + "F"); 


    //Transfer content to HTML for day 2
    var tempF2 = (response.list[9].main.temp - 273.15) * 1.80 + 32;
    var img2 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[9].weather[0].icon + ".png");
    
    $(".dayTwoDate").text("Date: " + response.list[9].dt_txt[0]+response.list[9].dt_txt[1]+response.list[9].dt_txt[2]+
    response.list[9].dt_txt[3]+response.list[9].dt_txt[4]+response.list[9].dt_txt[5]+response.list[9].dt_txt[6]+
    response.list[9].dt_txt[7]+response.list[9].dt_txt[8]+response.list[9].dt_txt[9]); 
    $(".dayTwoIcon").append(img2); 
    $(".dayTwoHumidity").text("Humidity: " + response.list[9].main.humidity); 
    
    $(".dayTwoTemp").text("Temperature: " + tempF2.toFixed(1) + "F"); 

    //Transfer content to HTML for day 3
    var tempF3 = (response.list[17].main.temp - 273.15) * 1.80 + 32;
    var img3 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[17].weather[0].icon + ".png");
    
    $(".dayThreeDate").text("Date: " + response.list[17].dt_txt[0]+response.list[17].dt_txt[1]+response.list[17].dt_txt[2]+
    response.list[17].dt_txt[3]+response.list[17].dt_txt[4]+response.list[17].dt_txt[5]+response.list[17].dt_txt[6]+
    response.list[17].dt_txt[7]+response.list[17].dt_txt[8]+response.list[17].dt_txt[9]); 
    $(".dayThreeIcon").append(img3); 
    $(".dayThreeHumidity").text("Humidity: " + response.list[17].main.humidity); 
    
    $(".dayThreeTemp").text("Temperature: " + tempF3.toFixed(1) + "F"); 

    //Transfer content to HTML for day 4
    var tempF4 = (response.list[25].main.temp - 273.15) * 1.80 + 32;
    var img4 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[25].weather[0].icon + ".png");
    
    $(".dayFourDate").text("Date: " + response.list[25].dt_txt[0]+response.list[25].dt_txt[1]+response.list[25].dt_txt[2]+
    response.list[25].dt_txt[3]+response.list[25].dt_txt[4]+response.list[25].dt_txt[5]+response.list[25].dt_txt[6]+
    response.list[25].dt_txt[7]+response.list[25].dt_txt[8]+response.list[25].dt_txt[9]); 
    $(".dayFourIcon").append(img4); 
    $(".dayFourHumidity").text("Humidity: " + response.list[25].main.humidity); 
    
    $(".dayFourTemp").text("Temperature: " + tempF4.toFixed(1) + "F"); 

    //Transfer content to HTML for day 5
    var tempF5 = (response.list[33].main.temp - 273.15) * 1.80 + 32;
    var img5 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[33].weather[0].icon + ".png");
    
    $(".dayFiveDate").text("Date: " + response.list[33].dt_txt[0]+response.list[33].dt_txt[1]+response.list[33].dt_txt[2]+
    response.list[33].dt_txt[3]+response.list[33].dt_txt[4]+response.list[33].dt_txt[5]+response.list[33].dt_txt[6]+
    response.list[33].dt_txt[7]+response.list[33].dt_txt[8]+response.list[33].dt_txt[9]); 
    $(".dayFiveIcon").append(img5); 
    $(".dayFiveHumidity").text("Humidity: " + response.list[33].main.humidity); 
    
    $(".dayFiveTemp").text("Temperature: " + tempF5.toFixed(1) + "F"); 
    
    })
    }
    cityForecast()






//Transfer content to HTML
// $("#date1").text("Date: " + response.list[0].sys.dt_txt);


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