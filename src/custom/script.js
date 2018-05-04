
console.info('hello from custom script')

const link = document.querySelector('.gitbook-link');
if(link instanceof HTMLAnchorElement) {
  link.href = 'https://elate.no';
  link.textContent = 'Elate.no'
}