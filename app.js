
// Alpha Vantage API:

  var APIkey = "CTSV8BKGR6BEKQ3F";
  var ticker = "MSFT";
  var stockdate = "2019-10-04";
  
//Daily Adjusted
var DailyAdjustedURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=" + ticker + "&apikey=" + APIkey

$.ajax({
  url: DailyAdjustedURL,
  method: "GET"
})
.then(function(response){
  console.log(stockdate)
  console.log(response["Time Series (Daily)"][stockdate]["2. high"])
  console.log(response["Time Series (Daily)"][stockdate]["3. low"])
  console.log(response["Time Series (Daily)"][stockdate]["1. open"])
  console.log(response["Time Series (Daily)"][stockdate]["4. close"])

  var div = $("<div>").addClass("row");
  div.append(getPriceCard(stockdate,response["Time Series (Daily)"][stockdate]["2. high"],response["Time Series (Daily)"][stockdate]["3. low"],response["Time Series (Daily)"][stockdate]["1. open"],response["Time Series (Daily)"][stockdate]["4. close"]))
  $("body").append(div)
});

//Weekly Adjusted
var WeeklyAdjustedURL = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=" + ticker + "&apikey=" + APIkey

$.ajax({
  url: WeeklyAdjustedURL,
  method: "GET"
})
.then(function(response){
  console.log(stockdate)
  console.log(response["Weekly Adjusted Time Series"][stockdate]["2. high"])
  console.log(response["Weekly Adjusted Time Series"][stockdate]["3. low"])
  console.log(response["Weekly Adjusted Time Series"][stockdate]["1. open"])
  console.log(response["Weekly Adjusted Time Series"][stockdate]["4. close"])



});

//Monthly Adjusted
  var MonthlyAdjustedURL = "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=" + ticker + "&apikey=" + APIkey

  $.ajax({
    url: MonthlyAdjustedURL,
    method: "Get"
  })
  .then(function(response){
    console.log(stockdate)
    console.log(response["Monthly Adjusted Time Series"][stockdate]["2. high"])
    console.log(response["Monthly Adjusted Time Series"][stockdate]["3. low"])
    console.log(response["Monthly Adjusted Time Series"][stockdate]["1. open"])
    console.log(response["Monthly Adjusted Time Series"][stockdate]["4. close"])


  });