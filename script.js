const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const pass = document.getElementById('pass');
const confirmPass = document.getElementById('confirmPass');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInput();
});

function setError(element,message)
{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

function setSuccess(element)
{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

function validateInput()
{
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passValue = pass.value.trim();
    const confirmPassValue = confirmPass.value.trim();

    if (firstNameValue === '')
    {
        setError(firstName, 'First Name is Required')
    }
    else{ setSuccess(firstName);}
    
    if (lastNameValue === '')
    {
        setError(lastName, 'Last Name is Required')
    }
    else{ setSuccess(lastName);}

    if (emailValue === '')
    {
        setError(email, 'Email is Required')
    }
    else{ setSuccess(email);}

    if (phoneValue === '')
    {
        setError(phone, 'Phone Number is Required')
    }
    else{ setSuccess(phone);}

    if (passValue === '')
    {
        setError(pass, 'Password is Required')
    }
    else{ setSuccess(pass);}

    if (confirmPassValue === '')
    {
        setError(confirmPass, 'Confirmation Password is Required')
    }
    else{ setSuccess(confirmPass);}
}
