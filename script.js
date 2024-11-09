document.querySelector('button').addEventListener('click', e => {
    const input = document.querySelector('input');
    e.preventDefault();

    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';

    }

});

const inputPass=document.getElementById('form-pass');
const iconPass=document.getElementById('pass-icon');

    iconPass.addEventListener('click', () =>{
        if (inputPass.getAttribute('type') === "password"){
            inputPass.setAttribute('type','text');

        } else {
            inputPass.setAttribute('type','password')
        }
    })
