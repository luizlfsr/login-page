$(document).ready(function () {
    const emailError = $('#email-error')
    const passwordError = $('#password-error')
    const storedEmail = localStorage.getItem('email')

    if (storedEmail) {
        $('#email').val(storedEmail)
    } else {
        $('#email').val('')
    }

    $('#logIn').on('click', function (e) {
        const email = $('#email').val()
        const password = $('#password').val()

        function showError(element, message) {
            element.css({'borderColor': '#f75454', 'display': 'block'})
            element.text(message)
        }

        function clearError(element) {
            element.css({'borderColor': 'rgba(2, 255, 25, 1', 'display': 'none'})
            element.text('')
        }

        //email verification
        function isValidEmail(email) {
            const regexEmial = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regexEmial.test(email)
        }

        emailError.text('')

        if(email === '') {
            showError(emailError, 'Preencha o campo de email!')
        } else if (!isValidEmail(email)) {
            showError(emailError, 'Este email não é válido!')
        } else {
            localStorage.setItem('email', email)
            clearError(emailError)
        }

        //password verification
        passwordError.text('')

        //verifica se senha vazia
        if(password === '') {
            showError(passwordError, 'Preencha o campo de senha!')
        } else {
            //reseta a lista de requisitos ausentes
            const missingRequirements = []

            //verifica se senha valida

            if (!/(?=.*[a-z])/.test(password)) {
                missingRequirements.push('letras minúsculas')
            } 

            if (!/(?=.*[A-Z])/.test(password)) {
                missingRequirements.push('letras maiúsuclas')
            }

            if (!/(?=.*[\d])/.test(password)) {
                missingRequirements.push('números')
            }

            if (!/(?=.*[!@#$%^&*])/.test(password)) {
                missingRequirements.push('caracteres especiais')
            }
            
            if (password.length < 8) {
                missingRequirements.push('oito caracteres')
            }
            
            if(missingRequirements > 0) {
                showError(passwordError, `A senha deve conter ${missingRequirements.join(', ')}`)
            } else {
                clearError(passwordError)
            }
        }

        e.preventDefault()
    })
})
