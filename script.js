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

function emailValidate(email)
{
    //regexp for validating an email
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase())
}

function phoneValidate(phone)
{
    const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(String(phone))
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
    else if (!emailValidate(emailValue))
    {
        setError(email,'Invalid Email')
    }
    else{
         setSuccess(email);
    }

    if (phoneValue === '')
    {
        setError(phone, 'Phone Number is Required')
    }
    else if (!phoneValidate(phoneValue))
    {
        setError(phone, 'Invalid Phone Number')
    }
    else{ setSuccess(phone);}

    if (passValue === '')
    {
        setError(pass, 'Password is Required')
    }
    else if(passValue.length < 6)
    {
        setError(pass, 'Password Must Be At Least 6 Characters')
    }
    else{ setSuccess(pass);}

    if (confirmPassValue === '')
    {
        setError(confirmPass, 'Confirmation Password is Required')
    }
    else if(confirmPassValue != passValue)
    {
        setError(confirmPass, 'Passwords Must Match')
    }
    else{ setSuccess(confirmPass);}
}
