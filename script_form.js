  //Element Accessibility 
const form = document.getElementById("form");
const name = document.getElementById("name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = 
document.getElementById("password2");
const age = document.getElementById('age')
const gender = document.getElementById("gender");
const birthday = document.getElementById("birthday");
const terms = document.getElementById("terms");

//Element Manipulation 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isValid = checkInput();
    if(isValid){
        //Replace content dynamically
        const usernameValue = username.value.trim();
        document.body.innerHTML = `<h1>Welcome, ${usernameValue}!</h1>
            <p>You have successfully logged in</p>`;
    }
});

function checkInput(){
//Getting the values from the input
    const nameValue = name.value;
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const ageValue = age.value;
    const genderValue = gender.value;
    const birthdayValue = birthday.value;
    const termsValue = terms.checked;
    
    //validation Logic
    let isValid = true;
    if(!validateName(nameValue)) isValid = false;
    if(!validateUsername(usernameValue)) isValid = false;
    if(!validateEmail(emailValue)) isValid = false;
    if(!validatePassword(passwordValue, password2Value)) isValid = false;
    if(!validateAge(ageValue)) isValid = false;
    if(!validateGender(genderValue)) isValid = false;
    if(!validateBirthday(birthdayValue)) isValid = false;
    if(!validateTerms(termsValue)) isValid = false;
    return isValid;
}
function validateName(nameValue) {    
    if(nameValue === "") {    
        setErrorFor(name, 'Name cannot be blank');    
        return false;    
    }     
    else if(nameValue.charAt(0) !== nameValue.charAt(0).toUpperCase()) {    
        setErrorFor(name, 'First letter must be uppercase');    
        return false;    
    } else {    
        setSuccessFor(name);    
        return true;    
    }    
}
//Username Validation Function 
function validateUsername(usernameValue) {
    if(usernameValue === "") {
        setErrorFor(username, 'username cannot be blank');
        return false;
    } 
    else if(usernameValue.length < 6) {
        setErrorFor(username, 'Username must be at least 6 characters long');
        return false;
    } else {
        setSuccessFor(username);
        return true;
    }
}

//Email Validation 
function validateEmail(emailValue) {
    if(emailValue === "") {
        setErrorFor(email, `Email cannot be blank`);
        return false;
    }
    else if(!emailValue.includes('@')) {
        setErrorFor(email, 'Valid Email Address must contain @');
        return false;
    }
    else{
        setSuccessFor(email);
        return true;
    }
}

//Password Validation 
function validatePassword(passwordValue, password2Value) {
    let isValid = true;

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
        isValid = false;
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'Password must be at least 8 characters long');
        isValid = false;
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Confirm your Password');
        isValid = false;
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords do not match');
        isValid = false;
    } else {
        setSuccessFor(password2);
    }

    return isValid;
}
// Age Validation
function validateAge(ageValue) {  
    if(ageValue === "") {  
        setErrorFor(age, 'Age cannot be blank');  
        return false;  
    }  
    else if(ageValue < 18) {  
        setErrorFor(age, 'You must be at least 18 years old');  
        return false;  
    }  
    else {  
        setSuccessFor(age);  
        return true;  
    }  
}  

// Gender Validation
function validateGender(genderValue) {
    if(genderValue === "") {
        setErrorFor(gender, 'Gender must be selected');
        return false;
    } else {
        setSuccessFor(gender);
        return true;
    }
}

// Birthday Validation
function validateBirthday(birthdayValue) {
    if(birthdayValue === "") {
        setErrorFor(birthday, 'Birthday cannot be blank');
        return false;
    } else {
        setSuccessFor(birthday);
        return true;
    }
}

// Terms and Conditions Validation
function validateTerms(termsValue) {
    if(!termsValue) {
        setErrorFor(terms, 'You must agree to the terms and conditions');
        return false;
    } else {
        setSuccessFor(terms);
        return true;
    }
}

//Error Trigger Definition 
function setErrorFor(input, message) {
  //Find the .form-control container of the input
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
   //add error message inside small
    small.innerText = message;
    //add error class
    formControl.className = 'form-control error';
}
//Success Trigger Definition 
function setSuccessFor(input) {
    //Find the .form-control container of the input
    const formControl = input.parentElement;
    //add success class
    formControl.className = 'form-control success';
}
