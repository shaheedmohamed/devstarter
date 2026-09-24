const hellobutton= document.querySelector('#helloButton');
const message= document.querySelector('#message');

hellobutton.addEventListener('click', () => {
    message.textContent= 'Hello! Thanks for reaching out. I will get back to you soon.';
});

