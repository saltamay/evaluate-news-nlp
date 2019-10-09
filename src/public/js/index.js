/* Import style sheets */
import '../css/reset.scss';
import '../css/style.scss';

import onSubmitText from './request';

console.log('Entry point is successfully setup'); 

const displayResults = (response) => {
  
  document.getElementById('results-section').style.display = 'block';
  document.getElementById('submitted_text').innerText = response.text;
  
  const tableData = document.querySelectorAll('.result_display');

  tableData[0].innerText = response.polarity[0].toUpperCase() + response.polarity.slice(1);
  tableData[1].innerText = response['polarity_confidence'].toFixed(2);
}

// Add event listener to the submit button to make the API call and display the results
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit').addEventListener('click', async (e) => {
    const text = document.getElementById('user-input').value;
    e.preventDefault();
    const response = await onSubmitText(text);
    displayResults(response);
  });
})




