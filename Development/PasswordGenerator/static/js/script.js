const length = document.getElementById('length');
const allowUppercase = document.getElementById('allow-uppercase');
const allowLowercase = document.getElementById('allow-lowercase');
const allowNumbers = document.getElementById('allow-numbers');
const allowSpecial = document.getElementById('allow-special');

const generateButton = document.getElementById('generate');

const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const digits = '0123456789';
const special = '~`! @#$%^&*()-_+={}[]|;:"<>,./?';

const passwordDetails = document.getElementById('password-details');
passwordDetails.style.display = 'none';

const passwordDisp = document.getElementById('password');
const passwordStrength = document.getElementById('strength');
const copyButton = document.getElementById('copy');

copyButton.onclick = () => {
    const pw = passwordDisp.innerHTML;
    navigator.clipboard.writeText(pw);
}

generateButton.onclick = () => {
    console.log(`Hi`);
    console.log(length.value);
    console.log(allowLowercase.checked);
    console.log(allowUppercase.checked);
    console.log(allowNumbers.checked);
    console.log(allowSpecial.checked);
    let pool = "";
    if(allowLowercase.checked) {
        pool += lowercaseCharacters;
    }
    if(allowUppercase.checked) {
        pool += uppercaseCharacters;
    }
    if(allowNumbers.checked) {
        pool += digits;
    }
    if(allowSpecial.checked) {
        pool += special;
    }
    console.log(pool);
    if(pool == "") {
        alert("Select atleast one type of charcater!");
        return false;
    }
    if(length.value <= 0) {
        alert("Invalid length!");
        return false;
    }
    let password = ""
    for(let i = 0; i < length.value; i++) {
        password += pool.charAt(Math.floor(Math.random() * pool.length));
    }
    console.log(password);
    passwordDisp.innerHTML = password;
    passwordDetails.style.display = 'block';
    if(length.value < 6) {
        passwordStrength.innerHTML = 'Weak';
        passwordStrength.style.color = 'red';
    }
    else if(length.value < 10) {
        passwordStrength.innerHTML = 'OK';
        passwordStrength.style.color = 'orange';
    }
    else {
        passwordStrength.innerHTML = 'Strong';
        passwordStrength.style.color = 'green';
    }
    return true;
}
