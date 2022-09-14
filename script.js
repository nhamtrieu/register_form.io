let userName  = document.querySelector('#register__name')
let userEmail  = document.querySelector('#register__email')
let userPassword  = document.querySelector('#register__password')
let userPasswordConfirm  = document.querySelector('#register__password--confirm')
let formRegiter = document.querySelector('.form-register')
const minLengthName = 6, minLengthPassword = 8;
// console.log(userName, userEmail, userPassword, userPasswordConfirm)

const showError = (input, message) => {
   let parent = input.parentElement;
   let error = parent.querySelector('.error-tilte');
   parent.classList.add('error');
   error.innerText =  message;
}

const showSuccess = (input) => {
    let parent = input.parentElement;
    let error = parent.querySelector('.error-tilte');
    parent.classList.remove('error');
    error.innerText = '';
}

const checkIsvalid = (listInput) => {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();

        if(!input.value) {
            isEmptyError = true;
            showError(input, 'Không được để trống');
        } else {
            showSuccess(input);
        }
    });
}

const checkEmailError = (input) => {
    const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    input.value = input.value.trim();
    let isEmailError = regexEmail.test(input.value);
    if(!isEmailError) {
        showError(input, 'Email không hợp lệ');
    } else {
        showSuccess(input);
    }
    return isEmailError;
}

const checkPasswordConfirm = (password, passwordConfirm) => {
    if(passwordConfirm.value === '') {
        showError(passwordConfirm, 'Không được để trống')
    }

    if(password.value !== passwordConfirm.value) {
        showError(passwordConfirm, 'Mật khẩu không trùng khớp');
        return false;
    } else {
        showSuccess(passwordConfirm);
        return true;
    }
}

const checkLengthName = (input, min) => {
    input.value = input.value.trim();
    if(input.value.length < min) {
        showError(input, `Không được ít hơn ${min} ký tự`);
    }
}

const checkLengthPassword = (input, min) => {
    input.value = input.value.trim();
    if(input.value.length < min) {
        showError(input, `Mật khẩu quá ngắn, nhập tối thiểu ${min} ký tự`);
    }
}

formRegiter.addEventListener('submit', function(e) {
    e.preventDefault();

    // console.log(checkEmailError(userEmail))
    checkPasswordConfirm(userPassword, userPasswordConfirm);
    checkIsvalid([userName, userEmail, userPassword, userPasswordConfirm])
    checkLengthName(userName, minLengthName);
    checkEmailError(userEmail);
    checkLengthPassword(userPassword, minLengthPassword);
})