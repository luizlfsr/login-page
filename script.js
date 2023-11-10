document.addEventListener('DOMContentLoaded', function () {
    const submit = document.getElementById('submit');


    submit.addEventListener('click', function (event) {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;



        /*email verification*/
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }



        if (email === '') {
            document.getElementById('email').style.borderColor = 'red';
            alert('Por favor, preencha o campo de e-mail!')
        } else if (!isValidEmail(email)) {
            document.getElementById('email').style.borderColor = 'red'
            alert('Por favor, insira um formato de e-mail valido!')
        }else {
            document.getElementById('email').style.borderColor = 'rgba(255, 255, 255, .25)'
        }



        /*passowrd verification*/
        if (password  === '') {
            document.getElementById('password').style.borderColor = 'red'
            alert('Por favor preencha a senha')
        } else {
            document.getElementById('password').style.borderColor = 'rgba(255, 255, 255, .25)'
        }



        event.preventDefault();
    })
})
