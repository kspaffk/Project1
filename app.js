// Alpha Vantage API:

function stockinfo(userSearch){

  var APIkey = "CTSV8BKGR6BEKQ3F";
  var ticker = userSearch;

//moment script
  var lastStockDay = moment().subtract(1, "days");
  var lastStockWeek = moment();
  var lastStockMonth = moment();
  while (lastStockDay.isoWeekday() > 5) {
     lastStockDay = moment(lastStockDay).subtract(1, "days");
  }
  while (lastStockWeek.isoWeekday() != 5) {
     lastStockWeek = moment(lastStockWeek).subtract(1, "days");
  }
  lastStockMonth = moment(lastStockMonth).startOf("Month");
  lastStockMonth = moment(lastStockMonth).subtract(1, "days");
  while (lastStockMonth.isoWeekday() > 5) {
     lastStockMonth = moment(lastStockMonth).subtract(1, "days");
  }
  lastStockDay = lastStockDay.format("YYYY-MM-DD");
  lastStockWeek = lastStockWeek.format("YYYY-MM-DD");
  lastStockMonth = lastStockMonth.format("YYYY-MM-DD");

console.log(lastStockDay)
console.log(lastStockWeek)
console.log(lastStockMonth)

//Daily Adjusted
var DailyAdjustedURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=" + ticker + "&apikey=" + APIkey

$.ajax({
  url: DailyAdjustedURL,
  method: "GET"
})
.then(function(response){
  var dailyhigh = parseFloat(response["Time Series (Daily)"][lastStockDay]["2. high"]).toFixed(2);
  var dailylow = parseFloat(response["Time Series (Daily)"][lastStockDay]["3. low"]).toFixed(2);
  var dailyopen = parseFloat(response["Time Series (Daily)"][lastStockDay]["1. open"]).toFixed(2);
  var dailyclose = parseFloat(response["Time Series (Daily)"][lastStockDay]["4. close"]).toFixed(2);

  console.log(lastStockDay)
  console.log(dailyhigh)
  console.log(dailylow)
  console.log(dailyopen)
  console.log(dailyclose)

  $(".stock-div").append(getPriceCard(lastStockDay,dailyhigh,dailylow,dailyopen,dailyclose,"Daily"))
});

//Weekly Adjusted
var WeeklyAdjustedURL = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=" + ticker + "&apikey=" + APIkey

$.ajax({
  url: WeeklyAdjustedURL,
  method: "GET"
})
.then(function(response){
  var weeklyhigh = parseFloat(response["Weekly Adjusted Time Series"][lastStockWeek]["2. high"]).toFixed(2);
  var weeklylow = parseFloat(response["Weekly Adjusted Time Series"][lastStockWeek]["3. low"]).toFixed(2);
  var weeklyopen = parseFloat(response["Weekly Adjusted Time Series"][lastStockWeek]["1. open"]).toFixed(2);
  var weeklyclose = parseFloat(response["Weekly Adjusted Time Series"][lastStockWeek]["4. close"]).toFixed(2);

  console.log(lastStockWeek)
  console.log(weeklyhigh)
  console.log(weeklylow)
  console.log(weeklyopen)
  console.log(weeklyclose)

  $(".stock-div").append(getPriceCard(lastStockWeek,weeklyhigh,weeklylow,weeklyopen,weeklyclose,"Weekly"))

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
    var monthlyhigh = parseFloat(response["Monthly Adjusted Time Series"][lastStockMonth]["2. high"]).toFixed(2);
    var monthlylow = parseFloat(response["Monthly Adjusted Time Series"][lastStockMonth]["3. low"]).toFixed(2);
    var monthlyopen = parseFloat(response["Monthly Adjusted Time Series"][lastStockMonth]["1. open"]).toFixed(2);
    var monthlyclose = parseFloat(response["Monthly Adjusted Time Series"][lastStockMonth]["4. close"]).toFixed(2);

    console.log(lastStockMonth)
    console.log(monthlyhigh)
    console.log(monthlylow)
    console.log(monthlyopen)
    console.log(monthlyclose)

    $(".stock-div").append(getPriceCard(lastStockMonth,monthlyhigh,monthlylow,monthlyopen,monthlyclose,"Monthly"))

  });
}
//Firebase setup

const firebaseConfig = {
  apiKey: "AIzaSyBucOADTvEUKByNXdujg0Xz01JGOrw94S4",
  authDomain: "comicsearch-baf00.firebaseapp.com",
  databaseURL: "https://comicsearch-baf00.firebaseio.com",
  projectId: "comicsearch-baf00",
  storageBucket: "comicsearch-baf00.appspot.com",
  messagingSenderId: "569479066676",
  appId: "1:569479066676:web:8328e59cd4e99f11430661",
  measurementId: "G-EEQ0N3BQTZ"
};
