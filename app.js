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
  var dailyhigh = parseFloat(response["Time Series (Daily)"][stockdate]["2. high"],2);
  var dailylow = parseFloat(response["Time Series (Daily)"][stockdate]["3. low"],2);
  var dailyopen = parseFloat(response["Time Series (Daily)"][stockdate]["1. open"],2);
  var dailyclose = parseFloat(response["Time Series (Daily)"][stockdate]["4. close"],2);

  console.log(stockdate)
  console.log(dailyhigh)
  console.log(dailylow)
  console.log(dailyopen)
  console.log(dailyclose)

  var div = $("<div>").addClass("row");
  div.append(getPriceCard(stockdate,dailyhigh,dailylow,dailyopen,dailyclose))
  div.append(stock-div)
});

//Weekly Adjusted
var WeeklyAdjustedURL = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=" + ticker + "&apikey=" + APIkey

$.ajax({
  url: WeeklyAdjustedURL,
  method: "GET"
})
.then(function(response){
  var weeklyhigh = parseFloat(response["Weekly Adjusted Time Series"][stockdate]["2. high"],2);
  var weeklylow = parseFloat(response["Weekly Adjusted Time Series"][stockdate]["3. low"],2);
  var weeklyopen = parseFloat(response["Weekly Adjusted Time Series"][stockdate]["1. open"],2);
  var weeklyclose = parseFloat(response["Weekly Adjusted Time Series"][stockdate]["4. close"],2);

  console.log(stockdate)
  console.log(weeklyhigh)
  console.log(weeklylow)
  console.log(weeklyopen)
  console.log(weeklyclose)

});

//Monthly Adjusted
  var MonthlyAdjustedURL = "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=" + ticker + "&apikey=" + APIkey

  var data;
  $.ajax({
    url: MonthlyAdjustedURL,
    method: "Get"
  })
  .then(function(response){
    data = response["Monthly Adjusted Time Series"];
    var monthlyhigh = parseFloat(response["Monthly Adjusted Time Series"][stockdate]["2. high"],2);
    var monthlylow = parseFloat(response["Monthly Adjusted Time Series"][stockdate]["3. low"],2);
    var monthlyopen = parseFloat(response["Monthly Adjusted Time Series"][stockdate]["1. open"],2);
    var monthlyclose = parseFloat(response["Monthly Adjusted Time Series"][stockdate]["4. close"],2);

    console.log(stockdate)
    console.log(monthlyhigh)
    console.log(monthlylow)
    console.log(monthlyopen)
    console.log(monthlyclose)

    console.log('data after response',data)

    var ctx = document.getElementById('myLineChart');

  
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,

});
  });
  console.log('data outside ajax call',data)

  

  

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

