function newsFunction() {

   var search = "Amazon";
    var queryUrl =  "https://newsapi.org/v2/top-headlines?q=" + search + "&apiKey=65bc9b92a33b4a738e32c2dfe3e014c7";
  
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
    .then(function(response) {

       var stckNews = response.articles;
       console.log(stckNews);
      
       stckNews.forEach(element => {
         if (element.urlToImage !== "") {
          $(".news-div").append(getNewsCards(element.title, element.description, element.url, element.urlToImage));
         }
      });
   
   
    })
}