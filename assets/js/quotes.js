var getRandomFortune = function () {
    var fortuneDiv = ".fortune";
    var quotesUrl = "http://quotes-1271.appspot.com/json";
    var defaultQuote = "There are far, far better things ahead than any we leave behind.";
    var defaultAuthor = "C.S.Lewis";

    var getQuote = function() {
        /* var quotes = $("#quotes").html(); */
        /* var template = Handlebars.compile(quotes); */
        var template = Handlebars.templates.quotes;

        $.get(quotesUrl, function(response) {
            if (response) {
                var q = Handlebars.escapeExpression(response.quote);
                var a = Handlebars.escapeExpression(response.author);
                $(fortuneDiv).append(template({quote: q, author: a}));
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
