const AYLIENTextAPI = require('aylien_textapi');

/* Initiate Aylien API SDK */
const textapi = new AYLIENTextAPI({
  application_id: "30e293c0",
  application_key: "2848c8941cc4d6ae426d9239d9a3d522"
});


export default function testAPI() {
  textapi.sentiment({
    'text': 'John is a very good football player!'
  }, function (error, response) {
    if (error === null) {
      console.log(response);
    }
  });
}