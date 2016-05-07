var getRandomFortune = function () {
    var fortuneDiv = ".fortune";
    var quotesUrl = "http://quotes-1271.appspot.com/json";
    var defaultQuote = "There are far, far better things ahead than any we leave behind.";
    var defaultAuthor = "C.S.Lewis";

    var getQuote = function() {
        var quotes = $("#quotes").html();
        var template = Handlebars.compile(quotes);

        $.get(quotesUrl, function(response) {
            if (response) {
                $(fortuneDiv).append(template(response));
            }
        }).fail(function(_) {
            $(fortuneDiv).append(template({quote:defaultQuote, author:defaultAuthor}))
        });
    };

    return {
        init: function () {
            getQuote();
        }
    };
};

$(function () {
    var fortune = new getRandomFortune();
    fortune.init();
});
