const fname = document.getElementById('name');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const text = document.getElementById('text');
const sendBtn = document.getElementById('sendBtn');


const fnameError = document.getElementById('fnameError');
const emailError = document.getElementById('emailError');
const telError = document.getElementById('telError');
const textError = document.getElementById('textError');

const fnameRegex = /^[A-Za-zა-ჰ]{3,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const numberRegex = /^\+995[0-9]{9}$/;

function validForm() {
    const isFnameValid = fnameRegex.test(fname.value);
    const isEmailValid = emailRegex.test(email.value);
    const isTelValid = numberRegex.test(tel.value);
    const isTextValid = text.value.trim() !== "";  

    
    if (isFnameValid && isEmailValid && isTelValid && isTextValid) {
        sendBtn.disabled = false;
    } else {
        sendBtn.disabled = true;
    }

    
    if (!isFnameValid) {
        fname.style.border = "2px solid red";
        fnameError.textContent = "სახელი უნდა შედგებოდეს მინიმუმ 3 ასოსგან.";
        fnameError.style.color = "red";
    } else {
        fname.style.border = "2px solid green";
        fnameError.textContent = "";
    }

    
    if (!isEmailValid) {
        email.style.border = "2px solid red";
        emailError.textContent = "შეიყვანეთ ელფოსტა სწორი ფორმით.";
        emailError.style.color = "red";
    } else {
        email.style.border = "2px solid green";
        emailError.textContent = "";
    }

    
    if (!isTelValid) {
        tel.style.border = "2px solid red";
        telError.textContent = "შეიყვანეთ ტელეფონის ნომერი სწორად.";
        telError.style.color = "red";
    } else {
        tel.style.border = "2px solid green";
        telError.textContent = "";
    }

    
    if (!isTextValid) {
        text.style.border = "2px solid red";
        textError.textContent = "ცარიელი არ უნდა იყოს.";
        textError.style.color = "red";
    } else {
        text.style.border = "2px solid green";
        textError.textContent = "";
    }
}

[fname, email, tel, text].forEach(input => {
    input.addEventListener('input', validForm);
});
