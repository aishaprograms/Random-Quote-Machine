# Random-Quote-Machine
This app retrieves random famous quotes from an API.

## API used
- Andruxnet Random Famous Quotes [Andruxnet Random Famous Quotes](https://market.mashape.com/andruxnet/random-famous-quotes)

## Getting Started
Click 'New Quote' to retrieve a new quote from Random Famous Quotes API. In order to switch category of quotes to 'movies', edit the URL of the xhr.open() function i.e. :
```
    xhr.open('POST', 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies');

```
Click 'Tweet Quote' in order to Tweet the quote. To edit the quote (e.g. to remove the hashtag), edit the varaible tweet in the tweetQuote function.

## Built With

* SublimeText

## Author

* **Aisha Ahmad** - [Aisha Ahmad](https://github.com/aishaprograms)

## Heroku App
* **Random Quote Machine** - [Random Quote Machine](https://powerful-bayou-60246.herokuapp.com/)

## Inspired By
Freecodecamp challenge
#100DaysofCode
