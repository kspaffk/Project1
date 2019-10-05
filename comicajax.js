$(function () {
    var queryUrl =  "https://newsapi.org/v2/top-headlines?q=stocks&apiKey=65bc9b92a33b4a738e32c2dfe3e014c7";
    console.log(queryUrl);
   
// need search button and search input class or id to connect a user input to ajax call.
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
    .then(function(response) {
        console.log(response);
    })
    
})