// function to get HTML for price cards
// examples
// $(".price-row").append(getPriceCard("2019-02-19", 15.65, 15.15, 15.31, 15.42));
function getPriceCard(date, high, low, open, close) {
    // create the container for the card
    var priceContainer = $("<div>").addClass("col s12 s4 m4 l4");
    // create the card display area
    var mainCard = $("<div>").addClass("main-card card cyan lighten-1");
    // specify the card content area
    var cardContent = $("<div>").addClass("card-content white-text");
    // add the date as the title
    var cardTitle = $("<span>").addClass("card-title").text(date);
    // add the closing price to the card
    var closePrice = $("<span>").addClass("close-price").text(close);
    // add another card container for the opening price
    var openCard = $("<div>").addClass("col s12 s4 l4");
    // create open card display area
    var openCardContent = $("<div>").addClass("card cyan lighten-4");
    // add opening price
    var openPrice = $("<span>").addClass("other-prices black-text").text(open);
    // add opening title
    var openTitle = $("<span>").addClass("other-price-titles black-text").text("Open");
    // add another card container for the high price
    var highCard = $("<div>").addClass("col s12 s4 l4");
    // create high card display area
    var highCardContent = $("<div>").addClass("card cyan lighten-4");
    // add highing price
    var highPrice = $("<span>").addClass("other-prices black-text").text(high);
    // add highing title
    var highTitle = $("<span>").addClass("other-price-titles black-text").text("High");
    // add another card container for the low price
    var lowCard = $("<div>").addClass("col s12 s4 l4");
    // create low card display area
    var lowCardContent = $("<div>").addClass("card cyan lighten-4");
    // add lowing price
    var lowPrice = $("<span>").addClass("other-prices black-text").text(low);
    // add lowing title
    var lowTitle = $("<span>").addClass("other-price-titles black-text").text("Low");

    // append items to the open card
    openCardContent.append(openPrice, openTitle);
    openCard.append(openCardContent);
    // append items to the high card
    highCardContent.append(highPrice, highTitle);
    highCard.append(highCardContent);
    // append items to the low card
    lowCardContent.append(lowPrice, lowTitle);
    lowCard.append(lowCardContent);
    // append items to the main card
    cardContent.append(cardTitle, closePrice, openCard, highCard, lowCard);
    mainCard.append(cardContent);
    priceContainer.append(mainCard);
    // return the container object
    return priceContainer;
}


//examples
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
    var linkIcon = $("<i>").addClass("material-icons").text("Go");
    // card content which has an article description
    var newsDescDiv = $("<div>").addClass("card-content");
    // paragraph for news description
    var newsDescP = $("<p>").text(newsDescription);

    // combine the image part of card
    newsLink.append(linkIcon);
    cardImg.append(newsImg, newsTitle, newsLink);
    newsDescDiv.append(newsDescP);
    card.append(cardImg, newsDescDiv);
    newsContainer.append(card);

    // return the card object
    return newsContainer;



}

var userSearch;

$(document).ready(function () {

    $("#submit-button").on("click", function (event) {
        event.preventDefault();
        var userSearch = $("#search").val();
        $(".main-content").empty();
        var tickerDiv = $("<div>").addClass("ticker-div");
        var stockDiv = $("<div>").addClass("stock-div row");
        var newsDiv = $("<div>").addClass("news-div row");

        tickerDiv.html("<h1>" + userSearch + "</h1>");
        $(".main-content").append(tickerDiv, stockDiv, newsDiv);
        newsFunction(userSearch);
    })

})

