$(function () {

    // $("#searchButton").on('click' function(){}
    // e.preventDefault();
    // var search = $("#userInput").val().trim();
    var queryUrl =  "https://newsapi.org/v2/top-headlines?q=" + search + "stocks&apiKey=65bc9b92a33b4a738e32c2dfe3e014c7";
    console.log(queryUrl);
   
// need search button and search input class or id to connect a user input to ajax call.
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
    .then(function(response) {
        console.log(response);
        var stockNews = response.data;
        stockNews = stockNews.articles;

        for ( var i in stockNews){
       var display = $("#displayDiv") ;
       var titleDiv = $("<div>");
       var image= $("<img>");
       titleDiv.text(stockNews[i].title);
       imageDiv = image.attr('src',stockNews[i].urlToImage); 
       var summary = $("<div>").text(stockNews[i].description);
     

       
        }

    })
    
})