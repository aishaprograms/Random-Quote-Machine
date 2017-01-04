document.getElementById('quote-btn').onclick = getQuote;

function getQuote() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous');
    xhr.setRequestHeader("X-Mashape-Key", "PHdg8Ow5k3mshlJIL3elLO92gUsFp1pW5YgjsnAftfxoi1abyk");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            document.getElementById('random-quote').innerHTML = data.quote + '\n' + data.author;
        } else {
            console.log('Error occured: ' + xhr.status);
        }
    };
    xhr.send();
}
