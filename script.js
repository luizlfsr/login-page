document.addEventListener('DOMContentLoaded', function () {
    const logIn = document.getElementById('logIn');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const storedEmail = localStorage.getItem('email')
    const storedPassword = localStorage.getItem('password')
    let missingRequeriments = [];

    if (storedEmail) {
        email.value = storedEmail;
    } else {
        email.value = '';
    }

    if (storedPassword) {
        password.value = storedPassword;
    } else {
        password.value = '';
    }


    logIn.addEventListener('click', function (event) {

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        function showError(element, message) {
            element.style.borderColor = '#f75454';
            element.textContent = message;
            element.style.display = 'block';
        }

        function clearError(element) {
            element.style.borderColor = 'rgba(2, 255, 25, 1)';
            element.style.display = 'none'
            element.textContent = ''
        }


        /*email verification*/
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        emailError.textContent = '';

        if (email === '') {
            showError(emailError, 'Preencha o campo de email!')
        } else if (!isValidEmail(email)) {
            showError(emailError, 'Este email não é valido!')
        } else {
            localStorage.setItem('email', email)
            clearError(emailError)
        }


        /*passowrd verification*/

        passwordError.textContent = '';
        
        if (password === '') {
            showError(passwordError, 'preencha o campo de senha!')
        } else {
            // Reset a lista de requisitos ausentes
            missingRequeriments = [];

            if (!/(?=.*[a-z])/.test(password)) {
                missingRequeriments.push('letras minúsculas');
            }

            if (!/(?=.*[A-Z])/.test(password)) {
                missingRequeriments.push('letras maiúsculas');
            }

            if (!/(?=.*[\d])/.test(password)) {
                missingRequeriments.push('números');
            }

            if (!/(?=.*[!@#$%^&*])/.test(password)) {
                missingRequeriments.push('caracteres especiais');
            }

            if (password.length < 8) {
                missingRequeriments.push('oito caracteres');
            }

            if (missingRequeriments.length > 0) {
                showError(passwordError, `A senha deve conter ${missingRequeriments.join(', ')}`)
            } else {
                localStorage.setItem('password', password)
                clearError(passwordError)
            }
        }

        event.preventDefault();
    })
})
