// function to get HTML for price cards
// examples
// $(".price-row").append(getPriceCard("2019-02-19", 15.65, 15.15, 15.31, 15.42));
function getPriceCard(date, high, low, open, close, priceTimeframe) {
    // create the card display area
    var mainCard = $("<div>").addClass("main-card card  cyan lighten-1");
    // specify the card content area
    var cardContent = $("<div>").addClass("card-content white-text");
    // add the date as the title
    var cardTitle = $("<span>").addClass("card-title").text(date + " - " + priceTimeframe + " adjusted price");
    // add the closing price to the card
    var closePrice = $("<span>").addClass("close-price").text(close);
    // create open card display area
    var openCardContent = $("<div>").addClass("card cyan lighten-4");
    // add opening price
    var openPrice = $("<span>").addClass("other-prices black-text").text(open);
    // add opening title
    var openTitle = $("<span>").addClass("other-price-titles black-text").text("Open");
    // // create high card display area
    var highCardContent = $("<div>").addClass("card cyan lighten-4");
    // add highing price
    var highPrice = $("<span>").addClass("other-prices black-text").text(high);
    // add highing title
    var highTitle = $("<span>").addClass("other-price-titles black-text").text("High");
    // // create low card display area
    var lowCardContent = $("<div>").addClass("card cyan lighten-4");
    // add lowing price
    var lowPrice = $("<span>").addClass("other-prices black-text").text(low);
    // add lowing title
    var lowTitle = $("<span>").addClass("other-price-titles black-text").text("Low");

    // append items to the open card
    openCardContent.append(openPrice, openTitle);
    // append items to the high card 
    highCardContent.append(highPrice, highTitle);
    // append items to the low card
    lowCardContent.append(lowPrice, lowTitle);
    // append items to the main card
    cardContent.append(cardTitle, closePrice, openCardContent, highCardContent, lowCardContent);
    mainCard.append(cardContent);

    return mainCard;
}


//example
// $(".news-row").append(getNewsCards("Avengers Save the Planet", "The Avengers finally figured out time travel and went back in town to kill Thanos before he used the stones.", "https://google.com", "https://cdn.vox-cdn.com/thumbor/QjYjrRLVMwCgjZSfE7JjC7URQns=/0x300:3733x2254/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19253276/1040241490.jpg.jpg"));
function getNewsCards(newsTitle, newsDescription, newsURL, newsURLtoImg) {
    // create the container for the card
    var newsContainer = $("<div>").addClass("col s12 s4 m4 l4 news");
    // create the card display area
    var card = $("<div>").addClass("card cyan lighten-1");
    // specify the card content area
    var cardImg = $("<div>").addClass("card-image");
    // image for card
    var newsImg = $("<img>").attr({
        src: newsURLtoImg,
        alt: "news-article"
    });
    // Card title which is the news article title
    var newsTitle = $("<span>").addClass("news-title white-text").html(newsTitle);
    // button to go to article
    var newsLink = $("<a>").addClass("btn-floating halfway-fab waves-effect waves-light red").attr({
        href: newsURL,
        target: "_blank"
    });
    var linkIcon = $("<i>").addClass("material-icons").text("arrow_forward_ios");
    // card content which has an article description
    var newsDescDiv = $("<div>").addClass("card-content");
    // paragraph for news description
    var newsDescP = $("<p>").text(newsDescription);
    var newsapiAttr = $("<span>").addClass("news-src-attr").text("Courtesy of NewsAPI.org");

    // combine the image part of card
    newsLink.append(linkIcon);
    cardImg.append(newsImg, newsTitle, newsLink);
    newsDescDiv.append(newsDescP, newsapiAttr);
    card.append(cardImg, newsDescDiv);
    newsContainer.append(card);

    // return the card object
    return newsContainer;
}

var userSearch;

$(document).ready(function () {

    $("#submit-button").on("click", function (event) {
        event.preventDefault();
        populatePageData();
    });
});

function populatePageData() {
    var userSearch = $(".search-input").val().trim();
    localStorage.setItem('recent-searches', userSearch);
    $(".main-content").empty();
    var tickerDiv = $("<div>").addClass("ticker-div");
    var stockDiv = $("<div>").addClass("stock-div row");
    var priceContainerDaily = $("<div>").addClass("col s12 s4 m4 l4 daily");
    var priceContainerWeekly = $("<div>").addClass("col s12 s4 m4 l4 weekly");
    var priceContainerMonthly = $("<div>").addClass("col s12 s4 m4 l4 monthly");
    stockDiv.append(priceContainerDaily, priceContainerWeekly, priceContainerMonthly);
    var newsDiv = $("<div>").addClass("news-div row");

    tickerDiv.html("<h1>" + userSearch + "</h1>");
    $(".main-content").append(tickerDiv, stockDiv, newsDiv);
    stockinfo(userSearch)
    newsFunction(userSearch);

    createSearchBarHeader();
 
}

function createSearchBarHeader() {
    var form = $("<form>").addClass("col s4").attr("id", "header-search");
    var row = $("<div>").addClass('row');
    var div = $("<div>").addClass("input-field");
    var searchIcon = $("<i>").addClass("material-icons prefix").text("search");
    var searchField = $("<input>").addClass("search-input").attr({
        id: "icon_search",
        type: "text",
    });
    var searchLabel = $("<label>").addClass("h-label").attr("for", "icon-search");
    var helper = $("<span>").addClass("helper-text").text("Enter Stock Symbol");

    div.append(searchIcon, searchField, searchLabel, helper);
    row.append(div);
    form.append(row);
    $(".header-row").append(form);

    $("form").on("submit", function (event) {
        event.preventDefault();
        populatePageData();
        $("#header-search").remove();
    });
};


