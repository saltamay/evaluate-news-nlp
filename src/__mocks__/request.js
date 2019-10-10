const responses = {
  'hello': {
    polarity: 'neutral',
    confidence: 0.67
  }
}

export default function request(text) {
  return new Promise((resolve, reject) => {
    // const userID = parseInt(url.substr('/users/'.length), 10);
    process.nextTick(() =>
      responses[text]
        ? resolve(responses[text])
        : reject({
          error: 'Bad Request',
        }),
    );
  });
}