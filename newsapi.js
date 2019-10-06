
// function for my ajax call to pull from news api
function newsFunction(userSearch) {

 

  // query url for my call with the search parameters
    var queryUrl =  "https://newsapi.org/v2/everything?q=" + userSearch + "&pageSize=5&apiKey=65bc9b92a33b4a738e32c2dfe3e014c7";
  
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
    .then(function(response) {

       var stckNews = response.articles;
       console.log(stckNews);
      // for each loop
       stckNews.forEach(element => {
         // this if is if it has a picture then it will load 
         if (element.urlToImage !== "") {
          $(".news-div").append(getNewsCards(element.title, element.description, element.url, element.urlToImage));
         }
      });
   
   
    })
}