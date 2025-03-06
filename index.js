const emailForm = document.querySelector('#emailForm');
const emailInput = document.querySelector('#emailInput');
const msg = document.querySelector('#message');

emailForm.addEventListener('submit', function(event){
    event.preventDefault();

    const email = emailInput.value;

    const isValid = validateEmail(email);

    if(isValid){
        msg.textContent = "E-mail válido!";
        msg.style.color = "green";
    }else{
        msg.textContent = "E-mail inválido!";
        msg.style.color = "red";
    }
});

const validateEmail = (email) => {
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
    return regex.test(email);
};