import test from '../test/test';
// import testAPI from '../test/testAPI';

console.log('Entry point is successfully setup'); 

test();
// testAPI();

const makeAPICall = async () => {
  const data = {
    mode: "tweet",
    text: "John is a very good player"
  }
  try {
    const response = await fetch('https://api.aylien.com/api/v1/sentiment',
    {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        "X-AYLIEN-TextAPI-Application-ID": "30e293c0",
        "X-AYLIEN-TextAPI-Application-Key": "2848c8941cc4d6ae426d9239d9a3d522",
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      console.log(response);
    }
  } catch(error) {
    console.log(error);
  }
}

makeAPICall();



