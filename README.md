# fortune

_"And this is aviation; I give it to the world."_  - _Louis Mouillard, French Inventor/Aeronaut (1834-1897)_

_"We were on the point of abandoning our work when the book of Mouillard fell into our hands, and we continued with the results you know."_ - _Wilbur Wright, American Inventor/Aviator (1867-1921)_

---- 

A minimalist extension that displays a new quote when you open a new browser
tab. This browser extension is named after popular Unix Program
[fortune](https://en.wikipedia.org/wiki/Fortune_(Unix)).  I used to use fortune
command a lot, and found the quotes funny and interesting. Over years, we have
started using browser more than command line. The browser with tabs is a modern
new shell interface of the computer. I wanted a fortune program for the browser.

## Technical Details

I developed this using Python code hosted in Google App Engine, and the client
side is written using Javascript as a browser addon. In the backend there is a
database where I keep the quote and author in a table. There is API call that
returns the quote and the author in the JSON format. To call the API visit
http://quotes-1271.appspot.com/json . This is an unauthenticated API as it
read-only GET call, and cannot change the state of the system.

The client side is handled by javascript libraries, Handlebars and Jquery.
Handlebars creates a template to insert the quote.  The jquery does the DOM
manipulation and and inserts the quote in the extension webpage. The quotes were
curated by me when I came across those thoughts in books and elsewhere. 
Enjoy using this.

## Get the extension directly from the webstore.

[![Google Chrome Extension](assets/promotional/chrome-web-store.png)](https://chromewebstore.google.com/detail/fortune/kmcoofcbagjmlfbkoopfohngcnfnaakb)

[![Firefox Addons](assets/promotional/firefox-addon.png)](https://addons.mozilla.org/en-US/firefox/addon/fortune-browser-extension/)


# Screenshot

![screenshot](https://i.imgur.com/qLlqW7t.png)

# Video Demo

[![Demo](http://img.youtube.com/vi/3S8b3eROxUY/0.jpg)](http://www.youtube.com/watch?v=3S8b3eROxUY "Demo")
