function validateForm() {
    var isValid = true;
    var isValidName = true;
    var isValidEmail = true;
    var isValidPhone = true;
    var isValidGender = true;

    var txtName = document.forms['register-form']['name'];
    var msgName = txtName.nextElementSibling;
    if (txtName.value == null || txtName.value.length == 0 || txtName.value.length > 50) {
        msgName.classList.remove('msg-success');
        msgName.classList.add('msg-error');
        msgName.innerHTML = 'Name is required!,Name up to 50 characters!';
        isValidName = false;
    } else {
        msgName.classList.remove('msg-error');
        msgName.classList.add('msg-success');
        msgName.innerHTML = 'Ok.';
    }
    var txtEmail = document.forms['register-form']['email'];
    var msgEmail = txtEmail.nextElementSibling;
    if (txtEmail.value == null || txtEmail.value.length == 0) {
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Email is required!';
        isValidEmail = false;
    } else {
        msgEmail.classList.remove('msg-error');
        msgEmail.classList.add('msg-success');
        msgEmail.innerHTML = 'Ok.';
    }
    var txtPhone = document.forms['register-form']['phone'];
    var msgPhone = txtPhone.nextElementSibling;
    if (txtPhone.value == null || txtPhone.value.length == 0) {
        msgPhone.classList.remove('msg-success');
        msgPhone.classList.add('msg-error');
        msgPhone.innerHTML = 'Phone is required!';
        isValidPhone = false;
    } else {
        msgPhone.classList.remove('msg-error');
        msgPhone.classList.add('msg-success');
        msgPhone.innerHTML = 'Ok.';
    }
    var txtGender = document.forms['register-form']['gender'];
    var msgGender = txtGender.nextElementSibling;
    if (txtGender.value == null || txtGender.value.length == 0) {
        msgGender.classList.remove('msg-success');
        msgGender.classList.add('msg-error');
        msgGender.innerHTML = 'Gender is required!';
        isValidGender = false;
    } else {
        msgPhone.classList.remove('msg-error');
        msgPhone.classList.add('msg-success');
        msgPhone.innerHTML = 'Ok.';
    }
    isValid = isValidName && isValidPhone && isValidGender && isValidEmail;
    return isValid;
}
var btnSubmit = document.forms['register-form']['btnSubmit'];
btnSubmit.onclick = function () {
    if(validateForm()){
        alert('Dang ky thanh cong');
        doRegister();
        document.getElementsByClassName('register-form').innerHTML='';
    }
}
function doRegister() {
    var name = document.forms['register-form']['name'].value;
    var email = document.forms['register-form']['email'].value;
    var phone = document.forms['register-form']['phone'].value;
    var gender = document.forms['register-form']['gender'].value;
    var hobby = document.forms['register-form']['hobby'].value;
    var introduce = document.forms['register-form']['introduce'].value;

    htmlContent += name;
    htmlContent += email;
    htmlContent += phone;
    htmlContent += gender;
    htmlContent += hobby;
    htmlContent += introduce;

    document.getElementById('register').innerHTML += htmlContent;
}
