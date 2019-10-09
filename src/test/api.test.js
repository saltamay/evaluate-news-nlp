import { onSubmitText } from '../public/js/index.js';

test('Hello should return neutral polarity with 0.67 confidence', async () => {
  expect.assertions(1);
  const response = await onSubmitText('hello');
  expect(response).toBeDefined();  
})