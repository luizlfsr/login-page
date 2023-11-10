document.addEventListener('DOMContentLoaded', function () {
    const submit = document.getElementById('submit');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');


    submit.addEventListener('click', function (event) {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;



        /*email verification*/
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        emailError.textContent = '';
        passwordError.textContent = '';


        if (email === '') {
            document.getElementById('email').style.borderColor = '#f75454';
            emailError.textContent = 'Por favor, preencha o campo de e-mail!'
            emailError.style.display = 'block'
        } else if (!isValidEmail(email)) {
            document.getElementById('email').style.borderColor = '#f75454'
            emailError.textContent = 'Por favor, preencha o campo com um formato de e-mail valido'
            emailError.style.display = 'block'
        }else {
            document.getElementById('email').style.borderColor = 'rgba(255, 255, 255, .25)'
        }



        /*passowrd verification*/
        if (password  === '') {
            document.getElementById('password').style.borderColor = '#f75454'
            passwordError.textContent = 'Por favor, preencha o campo de senha'
            passwordError.style.display = 'block'
        } else {
            document.getElementById('password').style.borderColor = 'rgba(255, 255, 255, .25)'
        }



        event.preventDefault();
    })
})
