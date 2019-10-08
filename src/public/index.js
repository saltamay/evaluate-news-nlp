import test from '../test/test';

/* Import style sheets */
import './css/reset.scss';
import './css/style.scss';

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
      console.log(jsonRes); 
    }
  } catch(error) {
    console.log(error);
  }
}



