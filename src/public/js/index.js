import test from '../../test/test';

/* Import style sheets */
import '../css/reset.scss';
import '../css/style.scss';

console.log('Entry point is successfully setup'); 

// test();

document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault();
  onSubmitText();
})

const onSubmitText = async () => {
  const text = document.getElementById('user-input').value;
  try {
    const response = await fetch('http://localhost:8080/sentiment',
    {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({text: text})
    });
    if (response.ok) {
      const jsonRes = await response.json();
      displayResults(jsonRes);
    }
  } catch(error) {
    console.log(error);
  }
}

const displayResults = (response) => {
  
  document.getElementById('results-section').style.display = 'block';
  document.getElementById('submitted_text').innerText = response.text;
  
  const tableData = document.querySelectorAll('.result_display');
  console.log(tableData);

  tableData[0].innerText = response.polarity[0].toUpperCase() + response.polarity.slice(1);
  tableData[1].innerText = response['polarity_confidence'].toFixed(2);
}



