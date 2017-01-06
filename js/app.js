getQuote();
document.getElementById('quote-btn').onclick = getQuote;
document.getElementById('tweet-btn').onclick = tweetQuote;

var quote;
var author;

function getQuote() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous');
    xhr.setRequestHeader("X-Mashape-Key", "PHdg8Ow5k3mshlJIL3elLO92gUsFp1pW5YgjsnAftfxoi1abyk");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            quote = data.quote;
            author = data.author;
            var newCite = document.createElement('cite');
            newCite.innerHTML = author;
            document.getElementById('random-quote').innerHTML = quote;
            document.getElementById('random-quote').appendChild(newCite);
        } else {
            console.log('Error occured: ' + xhr.status);
        }
    };
    xhr.send();
}

function tweetQuote() {
    var tweet = quote;
    tweet = tweet + ' - ' + author + ' ' + '#randomQuoteMachine';
    var twitterLink = 'http://twitter.com/home?status=' + encodeURIComponent(tweet);
    window.open(twitterLink, '_blank');
}
