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

        function isStrongPassword(passowrd) {
            const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
            return passwordregex.test(passowrd);
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
        } else {
            document.getElementById('email').style.borderColor = 'rgba(2, 255, 25, 1)'
            emailError.style.display = 'none'
            emailError.textContent = '';
        }



        /*passowrd verification*/
        if (password  === '') {
            document.getElementById('password').style.borderColor = '#f75454'
            passwordError.textContent = 'Por favor, preencha o campo de senha!'
            passwordError.style.display = 'block'
        } else if (!isStrongPassword(password)) {
            document.getElementById('password').style.borderColor = '#f75454'
            let missingRequeriments = [];

            if(!/(?=.*[a-z])/.test(password)) {
                missingRequeriments.push('letras minúsculas')
            }

            if(!/(?=.*[A-Z])/.test(password)) {
                missingRequeriments.push('letras maiúsculas')
            }
            
            if(!/(?=.*[\d])/.test(password)) {
                missingRequeriments.push('números')
            }

            if(!/(?=.*[!@#$%^&*])/.test(password)) {
                missingRequeriments.push('caracteres especiais')
            }

            if(!/(?=.{8,})/.test(password)) {
                missingRequeriments.push('oito caracteres')
            }

            passwordError.textContent = `A senha deve conter ${missingRequeriments.join(', ')}`;
        } else {
            document.getElementById('password').style.borderColor = 'rgba(2, 255, 25, 1)'
            passwordError.style.display = 'none'
            passwordError.textContent = '';
        }



        event.preventDefault();
    })
})
