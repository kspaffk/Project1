// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//     });

//     // Or with jQuery

$(document).ready(function(){
    // function to get HTML for price cards
    function getPriceCard(date, high, low, open, close) {
        // create the container for the card
        var container = $("<div>").addClass("col s12 m3");
        // create the card display area
        var mainCard = $("<div>").addClass("main-card card cyan lighten-1");
        // specify the card content area
        var cardContent = $("<div>").addClass("card-content white-text");
        // add the date as the title
        var cardTitle = $("<span>").addClass("card-title").text(date);
        // add the closing price to the card
        var closePrice = $("<span>").addClass("close-price").text(close);
        // add another card container for the opening price
        var openCard = $("<div>").addClass("col s12 m4");
        // create open card display area
        var openCardContent = $("<div>").addClass("card cyan lighten-4");
        // add opening price
        var openPrice = $("<span>").addClass("other-prices black-text").text(open);
        // add opening title
        var openTitle = $("<span>").addClass("other-price-titles black-text").text("Open");
        // add another card container for the high price
        var highCard = $("<div>").addClass("col s12 m4");
        // create high card display area
        var highCardContent = $("<div>").addClass("card cyan lighten-4");
        // add highing price
        var highPrice = $("<span>").addClass("other-prices black-text").text(high);
        // add highing title
        var highTitle = $("<span>").addClass("other-price-titles black-text").text("High");
        // add another card container for the low price
        var lowCard = $("<div>").addClass("col s12 m4");
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
        container.append(mainCard);
        // return the container object
        return container;
    }

    $(".kent").append(getPriceCard("2019-02-19", 15.65, 15.15, 15.31, 15.42));
});