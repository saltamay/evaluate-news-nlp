export default function test() {
  const el = document.querySelector('h1');

  el.addEventListener('click', () => {
    console.log('It\'s working!');
  })
}