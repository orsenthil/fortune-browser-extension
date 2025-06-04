var getRandomFortune = function () {
    var fortuneDiv = ".fortune";
    var quotesUrl = "http://quotes-1271.appspot.com/json";
    var defaultQuote = "There are far, far better things ahead than any we leave behind.";
    var defaultAuthor = "C.S.Lewis";

    // HTML escape function
    var escapeHtml = function(text) {
        if (typeof text !== 'string') return '';
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/\//g, '&#x2F;')
            .replace(/`/g, '&#x60;')
            .replace(/=/g, '&#x3D;');
    };

    // Sanitize text while preserving legitimate HTML entities
    var sanitizeText = function(text) {
        if (typeof text !== 'string') return '';
        // First escape any HTML to prevent XSS
        var escaped = escapeHtml(text);
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

    var createQuoteElement = function(quote, author) {
        var section = document.createElement('section');
        var quoteP = document.createElement('p');
        var authorP = document.createElement('p');
        
        quoteP.className = 'quote';
        quoteP.textContent = quote;
        
        authorP.className = 'quote author';
        authorP.setAttribute('align', 'right');
        authorP.textContent = author;
        
        section.appendChild(quoteP);
        section.appendChild(authorP);
        
        return section;
    };

    var getQuote = function() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', quotesUrl, true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                try {
                    var response = JSON.parse(xhr.responseText);
                    if (response && response.quote && response.author) {
                        var safeQuote = sanitizeText(response.quote);
                        var safeAuthor = sanitizeText(response.author);
                        var quoteElement = createQuoteElement(safeQuote, safeAuthor);
                        document.querySelector(fortuneDiv).appendChild(quoteElement);
                    }
                } catch (e) {
                    // If JSON parsing fails, use default quote
                    var quoteElement = createQuoteElement(defaultQuote, defaultAuthor);
                    document.querySelector(fortuneDiv).appendChild(quoteElement);
                }
            } else {
                // If request fails, use default quote
                var quoteElement = createQuoteElement(defaultQuote, defaultAuthor);
                document.querySelector(fortuneDiv).appendChild(quoteElement);
            }
        };
        xhr.onerror = function() {
            // If request fails, use default quote
            var quoteElement = createQuoteElement(defaultQuote, defaultAuthor);
            document.querySelector(fortuneDiv).appendChild(quoteElement);
        };
        xhr.send();
    };

    return {
        init: function () {
            getQuote();
        }
    };
};

document.addEventListener('DOMContentLoaded', function() {
    var fortune = new getRandomFortune();
    fortune.init();
});
