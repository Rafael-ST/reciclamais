/* eslint-disable no-inner-declarations */
const form = () => {

    let pathArray = window.location.pathname.split('/')

    if (pathArray[1] == 'cadastro') {

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })

    let passwordForm = document.getElementById('id_senha')
    let confirmPasswordField = document.getElementById('id_senha2');
    let alertPasswordField = document.querySelector('.alert-message');
    let confirmPasswordError = document.getElementById('error-confirm-password');
    let togglePasswordBtn = document.querySelector('.eye-password');
    let togglePasswordBtn2 = document.querySelector('.eye-password2');

    if(passwordForm){
        passwordForm.addEventListener('blur', function(event) {
            let password = document.getElementById('id_senha').value;
            let hasUpperCase = /[A-Z]/.test(password);
            let hasLowerCase = /[a-z]/.test(password);
            let hasNumber = /\d/.test(password);
            let isValidLength = password.length >= 8;
      
            let passwordInput = document.getElementById('id_senha');
            let errorMessage = document.getElementById('error');
      
            if (!(hasUpperCase && hasLowerCase && hasNumber && isValidLength)) {
              event.preventDefault();
              errorMessage.innerText = 'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e ter pelo menos 8 caracteres.';
              passwordInput.classList.remove('is-valid');
              passwordInput.classList.add('is-invalid');
            } else {
              errorMessage.innerText = '';
              passwordInput.classList.remove('is-invalid');
              passwordInput.classList.add('is-valid');
            }
        });
        confirmPasswordField.addEventListener('blur', function(event) {
            let password = document.getElementById('id_senha2').value;
            let hasUpperCase = /[A-Z]/.test(password);
            let hasLowerCase = /[a-z]/.test(password);
            let hasNumber = /\d/.test(password);
            let isValidLength = password.length >= 8;
      
            let passwordInput = document.getElementById('id_senha2');
            let errorMessage = document.getElementById('error2');
      
            if (!(hasUpperCase && hasLowerCase && hasNumber && isValidLength)) {
              event.preventDefault();
              errorMessage.innerText = 'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e ter pelo menos 8 caracteres.';
              passwordInput.classList.remove('is-valid');
              passwordInput.classList.add('is-invalid');
            } else {
              errorMessage.innerText = '';
              passwordInput.classList.remove('is-invalid');
              passwordInput.classList.add('is-valid');
            }

        })
    }



    function validatePassword() {
      let password = passwordForm.value;
      let confirmPassword = confirmPasswordField.value;

      if (password !== confirmPassword) {
        confirmPasswordError.innerText = 'As senhas não são iguais.';
        confirmPasswordField.classList.remove('is-valid');
        confirmPasswordField.classList.add('is-invalid');
        alertPasswordField.classList.add('d-block');
        alertPasswordField.classList.remove('d-none');
        console.log("error")
        return false;
      } else {
        confirmPasswordError.innerText = '';
        confirmPasswordField.classList.remove('is-invalid');
        confirmPasswordField.classList.add('is-valid');
        alertPasswordField.classList.add('d-none')
        alertPasswordField.classList.remove('d-block');
        console.log("verdadeiro")
        return true;
      }
    }

    const togglePassword = (inputField) => {
        if (inputField.type === 'password') {
          inputField.type = 'text';
        } else {
          inputField.type = 'password';
        }
    };
    confirmPasswordField.addEventListener('blur', validatePassword);

    togglePasswordBtn.addEventListener('click', () => togglePassword(passwordForm));
    togglePasswordBtn2.addEventListener('click', () => togglePassword(confirmPasswordField));

    let idBonificao1 = document.querySelector("#idBonificao1");
    let idBonificao0 = document.querySelector("#idBonificao0");
    let divRowBonificacao = document.querySelector("#div_bonificacao");

    idBonificao1.addEventListener('click', function () {
        divRowBonificacao.classList.add('d-none')
        divRowBonificacao.classList.remove('d-block')
    })
    idBonificao0.addEventListener('click', function () {
        divRowBonificacao.classList.add('d-block')
        divRowBonificacao.classList.remove('d-none')
    })


    let divNomeZelador = document.querySelector("#div_zelador");
    let radioZelador1 = document.querySelector(".div_radioZelador1");
    let radioZelador0 = document.querySelector(".div_radioZelador0");

    radioZelador0.addEventListener('click', function () {
        divNomeZelador.classList.add('d-none')
        divNomeZelador.classList.remove('d-block')
    })
    radioZelador1.addEventListener('click', function () {
        divNomeZelador.classList.add('d-block')
        divNomeZelador.classList.remove('d-none')
    })

  }



}

export { form }