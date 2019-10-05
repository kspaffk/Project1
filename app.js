// Alpha Vantage API:

  var APIkey = "CTSV8BKGR6BEKQ3F";
  var ticker = "MSFT";
  var stockdate = "2019-10-04";
  //sdsknk  stockdate.split
//Daily Adjusted
var DailyAdjustedURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=" + ticker + "&apikey=" + APIkey

$.ajax({
  url: DailyAdjustedURL,
  method: "GET"
})
.then(function(response){
  var dailyhigh = response["Time Series (Daily)"][stockdate]["2. high"];
  var dailylow = response["Time Series (Daily)"][stockdate]["3. low"];
  var dailyopen = response["Time Series (Daily)"][stockdate]["1. open"];
  var dailyclose = response["Time Series (Daily)"][stockdate]["4. close"];

  console.log(typeof stockdate)
  console.log(parseFloat(dailyhigh,2))
  console.log(dailylow)
  console.log(dailyopen)
  console.log(dailyclose)

  var div = $("<div>").addClass("row");
  div.append(getPriceCard(stockdate,dailyhigh,dailylow,dailyopen,dailyclose))
});

//Weekly Adjusted
var WeeklyAdjustedURL = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=" + ticker + "&apikey=" + APIkey

$.ajax({
  url: WeeklyAdjustedURL,
  method: "GET"
})
.then(function(response){
  var weeklyhigh = response["Weekly Adjusted Time Series"][stockdate]["2. high"];
  var weeklylow = response["Weekly Adjusted Time Series"][stockdate]["3. low"];
  var weeklyopen = response["Weekly Adjusted Time Series"][stockdate]["1. open"];
  var weeklyclose = response["Weekly Adjusted Time Series"][stockdate]["4. close"];

  console.log(stockdate)
  console.log(weeklyhigh)
  console.log(weeklylow)
  console.log(weeklyopen)
  console.log(weeklyclose)

});

//Monthly Adjusted
  var MonthlyAdjustedURL = "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=" + ticker + "&apikey=" + APIkey

  $.ajax({
    url: MonthlyAdjustedURL,
    method: "Get"
  })
  .then(function(response){
    var monthlyhigh = response["Monthly Adjusted Time Series"][stockdate]["2. high"];
    var monthlylow = response["Monthly Adjusted Time Series"][stockdate]["3. low"];
    var monthlyopen = response["Monthly Adjusted Time Series"][stockdate]["1. open"];
    var monthlyclose = response["Monthly Adjusted Time Series"][stockdate]["4. close"];

    console.log(stockdate)
    console.log(monthlyhigh)
    console.log(monthlylow)
    console.log(monthlyopen)
    console.log(monthlyclose)


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

