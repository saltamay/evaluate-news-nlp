/* Import style sheets */
import '../css/reset.scss';
import '../css/style.scss';
import request from './request';

console.log('Entry point is successfully setup'); 

const getResponse = async (text) => {
  const response = await request(text);
  return response;
}

export default function displayResults(responseObj) {
  
  document.getElementById('results-section').style.display = 'block';
  document.getElementById('submitted_text').innerText = responseObj.text;
  
  const tableData = document.querySelectorAll('.result_display');

  tableData[0].innerText = responseObj.polarity[0].toUpperCase() + responseObj.polarity.slice(1);
  tableData[1].innerText = responseObj['polarity_confidence'].toFixed(2);
}

// Add event listener to the submit button to make the API call and display the results
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit').addEventListener('click', async (e) => {
    const text = document.getElementById('user-input').value;
    e.preventDefault();
    const response = await getResponse(text);
    displayResults(response);
  });
})

export { getResponse };


