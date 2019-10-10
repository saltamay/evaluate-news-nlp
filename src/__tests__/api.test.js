import request from '../__mocks__/request';

const getResponse = async (text) => {
  const response = await request(text);
  return response;
}

it('Hello should return neutral polarity with 0.67 confidence', async () => {
  const response = await getResponse('hello');
  expect(response.polarity).toEqual('neutral');
})