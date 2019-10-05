// Alpha Vantage API:

  var APIkey = "CTSV8BKGR6BEKQ3F";
  var ticker = "MSFT"

//Time Series
  var timeseriesURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + ticker + "&interval=5min&apikey=" + APIkey;

  $.ajax({
    url: timeseriesURL,
    method: "GET"
  })
  .then(function(response){
    console.log(response)
  });


        // Transfer content to HTML
//        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
  //      $(".wind").text("Wind Speed: " + response.wind.speed);
    //    $(".humidity").text("Humidity: " + response.main.humidity);
//        $(".temp").text("Temperature (F) " + response.main.temp);

        // Log the data in the console as well
//        console.log("Wind Speed: " + response.wind.speed);
//        console.log("Humidity: " + response.main.humidity);
//        console.log("Temperature (F): " + response.main.temp);
//      });


//Daily Adjusted
  var DailyAdjustedURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=" + ticker + "&apikey=" + APIkey

  $.ajax({
    url: DailyAdjustedURL,
    method: "GET"
  })
  .then(function(response){
 //   $(".high").text("High: " + response.high)

    console.log(response)
  });

//Weekly Adjusted
  var WeeklyAdjustedURL = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=" + ticker + "&apikey=" + APIkey

  $.ajax({
    url: WeeklyAdjustedURL,
    method: "GET"
  })
  .then(function(response){
    console.log(response)
  });

//Monthly Adjusted
  var MonthlyAdjustedURL = "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=" + ticker + "&apikey=" + APIkey

  $.ajax({
    url: MonthlyAdjustedURL,
    method: "Get"
  })
  .then(function(response){
    console.log(response)
  });

