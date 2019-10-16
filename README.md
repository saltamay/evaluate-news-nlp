# Evaluate News with NLP

## Overview

Evaluate News with NLP is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.

## Table of Contents

1. [About the Project](#about-the-project)
2. [API(s) Used](#apis(s)-used)
3. [Development Strategy](#development-strategy)
4. [Getting Started](#getting-started) 
5. [Built With](#built-with)
6. [Test](#test)
7. [Licence](#licence)

## About the Project

Evaluate News with NLP allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. Using an exciting new api called Aylien, we can build a simple web interface to interact with their NLP system. This tool will give us back pertinent information about the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

### More About Natural Language Processing

NLP is considered its own branch of computer science, focused on computers’ ability to process and even interact with natural human speech. Machine learning and deep learning are used on massive amounts of data to obtain the rules and understanding of nuance in human speech. Everyone who has used Alexa or Google Assistant or other voice command systems knows that they are always improving - but they aren’t perfect. Verbal interactions can be incredibly hard to decipher. Sarcasm, for instance, requires understanding not just words and grammar but tone as well, and regional accents and ways of saying things have to be taken into account, not to mention coverage for all the major languages.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## API(s) Used

* [Aylien API](https://docs.aylien.com/textapi/#getting-started) - The AYLIEN Text Analysis API is a package of Natural Language Processing and Machine Learning-powered APIs for analyzing and extracting various kinds of information from textual content.

## Development Strategy

1. Setup Webpack, Node and Ecpress Server
   - [webpac-setup](https://gist.github.com/saltamay/443ae5ee02027c01fd9aba7a61c1ab57)
2. Setup the API
   - [Aylien API Docs](https://docs.aylien.com/textapi/#getting-started)
3. Parse the response body to dynamically fill content on the page.
4. Test that the server and form submission work, making sure to also handle error responses if the user input does not match API requirements. Add Jest to the project to handle testing as well.
5. Setup service workers for offline viewing
6. Test that the site is now available even when you stop your local server
7. Deploy

## Getting Started

1. Download or clone the project:
```
git clone https://github.com/saltamay/travel-app.git [folder_name]
```
2. Install dependencies
```
npm install --save-dev
```
3. Start the server
```
npm start
```
4. Setup the environment development or production
```
npm run build-dev
```
or 
```
npm run build-prod
```
5. Test with Jest
```
npm run test
```

## Built With

* [Sass](https://sass-lang.com/documentation) - The web framework used
* [Webpack](https://webpack.js.org/concepts/) - Asset Management
* [Babel](https://babeljs.io/) - JavaScript Compiler
* [Node.js](https://nodejs.org/en/) - JavaScript Runtime
* [Express.js](https://expressjs.com/) - Server Framework for Node.js
* [Jest](https://jestjs.io/) - Testing suit
* [Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers) - For offline capability

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



