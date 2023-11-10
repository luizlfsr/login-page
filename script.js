document.addEventListener('DOMContentLoaded', function () {
    const submit = document.getElementById('submit');

    submit.addEventListener('click', function (event) {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email === '') {
            document.getElementById('email').style.borderColor = 'red';
            alert('Por favor preencha o Email')
        } else {
            document.getElementById('email').style.borderColor = 'rgba(255, 255, 255, .25)'
        }


        if (password  === '') {
            document.getElementById('password').style.borderColor = 'red'
            alert('Por favor preencha a senha')
        } else {
            document.getElementById('password').style.borderColor = 'rgba(255, 255, 255, .25)'
        }

        event.preventDefault();
    })
})
