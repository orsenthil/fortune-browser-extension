var getRandomFortune = function () {
    var fortuneDiv = ".fortune";
    var quotesUrl = "http://quotes-1271.appspot.com/json";
    var defaultQuote = "There are far, far better things ahead than any we leave behind.";
    var defaultAuthor = "C.S.Lewis";

    // Sanitize text while preserving legitimate HTML entities
    var sanitizeText = function(text) {
        // First escape any HTML to prevent XSS
        var escaped = Handlebars.escapeExpression(text);
        // Then convert common HTML entities back to their readable form
        return escaped
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#x27;/g, "'")
            .replace(/&#x2F;/g, '/')
            .replace(/&#x60;/g, '`')
            .replace(/&#x3D;/g, '=');
    };

    var getQuote = function() {
        var template = Handlebars.templates.quotes;

        $.get(quotesUrl, function(response) {
            if (response) {
                var safeQuote = sanitizeText(response.quote);
                var safeAuthor = sanitizeText(response.author);
                $(fortuneDiv).append(template({quote: safeQuote, author: safeAuthor}));
            }
        }).fail(function(_) {
            var safeDefaultQuote = sanitizeText(defaultQuote);
            var safeDefaultAuthor = sanitizeText(defaultAuthor);
            $(fortuneDiv).append(template({quote: safeDefaultQuote, author: safeDefaultAuthor}))
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
