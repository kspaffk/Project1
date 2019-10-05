

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

//ebay call for find items by keyword

// https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords
// &SERVICE-VERSION=1.0.0
// &SECURITY-APPNAME=TylerCas-ComicSea-PRD-a844463b1-2f780528
// &RESPONSE-DATA-FORMAT=XML
// &REST-PAYLOAD
// &keywords=harry%20potter%20phoenix




//Firebase setup...still need to change storage

const firebaseConfig = {
  apiKey: "AIzaSyBucOADTvEUKByNXdujg0Xz01JGOrw94S4",
  authDomain: "comicsearch-baf00.firebaseapp.com",
  databaseURL: "https://comicsearch-baf00.firebaseio.com",
  projectId: "comicsearch-baf00",
  storageBucket: "",
  messagingSenderId: "569479066676",
  appId: "1:569479066676:web:8328e59cd4e99f11430661",
  measurementId: "G-EEQ0N3BQTZ"
};

