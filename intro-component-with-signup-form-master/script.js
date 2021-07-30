const form = document.getElementsByTagName("form")[0];
const formElements = form.elements;
const fnameInput = formElements[0];
const lnameInput = formElements[1];
const emailInput = formElements[2];
const passwordInput = formElements[3];

const FNAME_REQUIRED = "Please enter your first name.";
const LNAME_REQUIRED = "Please enter your last name.";
const EMAIL_REQUIRED = "Please enter your email.";
const EMAIL_VALID = "Please enter a valid email address.";
const PASSWORD_REQUIRED = "Please enter your password.";
const PASSWORD_SECURE = "Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)";
const isRequired = value => value === '' ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const showError = (input, message) => {
    const formDiv = input.parentElement;
    formDiv.classList.remove('success');
    formDiv.classList.add('error');

    const error = formDiv.querySelector('small');
    error.textContent = message;

};

const showSuccess = (input) => {
    const formDiv = input.parentElement;
    formDiv.classList.remove('error');
    formDiv.classList.add('success');

    const error = formDiv.querySelector('small');
    error.textContent = "";
}

const checkfName = () => {
    const firstName = fnameInput.value.trim();
    if (!isRequired(firstName)) {
        showError(fnameInput, FNAME_REQUIRED);
        return false;
    } 
    showSuccess(fnameInput);
    return true;
}

const checklName = () => {
    const lastName = lnameInput.value.trim();
    if (!isRequired(lastName)) {
        showError(lnameInput, LNAME_REQUIRED);
        return false;
    }
    showSuccess(lnameInput);
    return true;
}

const checkEmail = () => {
    const email = formElements['email'].value.trim();
    if (!isRequired(email)) {
        showError(emailInput, EMAIL_REQUIRED);
        return false
    } else if (!isEmailValid(email)) {
        showError(emailInput, EMAIL_VALID);
        return false
    }
    showSuccess(emailInput);
    return true;
}

const checkPassword = () => {
    const password = passwordInput.value.trim();

    if (!isRequired(password)) {
        showError(passwordInput, PASSWORD_REQUIRED);
        return false
    } else if (!isPasswordSecure(password)) {
        showError(passwordInput, PASSWORD_SECURE);
        return false;
    } 
    showSuccess(passwordInput);
    return true;

}

const resetAfterSubmitting = () => {
    //change border of all to regular and remove text
    for (let i = 0; i <= 3; i++)  {
        let formDiv = formElements[i].parentElement;
        formDiv.classList.remove('success');

        const error = formDiv.querySelector('small');
        error.textContent = "";

    }
    form.reset();
}


form.addEventListener("submit", (e) => {
    
    e.preventDefault();

    let validfName = checkfName();
    let validlName = checklName();
    let validEmail = checkEmail();
    let validPassword = checkPassword();

    // form is valid and can submit to a server
    if (validfName && validlName && validEmail && validPassword) {
        //reset form
        resetAfterSubmitting();
        
        alert("This form only performs client side validation and does not use a server.");
    }

});

