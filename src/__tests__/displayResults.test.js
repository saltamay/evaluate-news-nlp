import displayResults from '../public/js/index';

const resObj = {
  polarity: 'Neutral',
  confidence: 0.67
}

test('test', () => {
  beforeEach(() => {
  document.body.innerHTML =
    '<div id="results-section">' +
    '<div id="submitted-text"></div>' +
    '<table class="results_table">' +
    '<thead>' +
    '<tr>' + '<th>Polarity</th>' + '<th>Confidence</th>' + '</tr>' +
    '</thead>' +
    '<tbody>' +
    '<tr>' + 
    '<td class="result_display"></td>' +
    '<td class="result_display"></td>' +
    '</tr>' +
    '<tbody' +
    '</div>';
  });
  afterEach(() => {
    displayResults(resObj);
    expect(document.querySelectorAll('.result_display')[0].innerText).toEqual('Neutral');
    expect(document.querySelectorAll('.result_display')[1].innerText).toBe(0.67);
  })
})