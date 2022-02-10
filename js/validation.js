const numberPhone = document.getElementById("number_phone");
const packageCode = document.getElementById("package_code");
const form = document.getElementById("form");
const error = document.getElementById("err");
const button = document.getElementById("btn-submit");
const popUp = document.getElementById("popup_window");

function validatePhoneNumber(input_str) {
    var regexNuberPhone = /^[0-9]{9}$/;

    return regexNuberPhone.test(input_str);
}

function validatePackageCode(input_str) {
    var regexPackageCode = /^[0-9]{4}$/;

    return regexPackageCode.test(input_str);
}

function validateData() {
    let messages = [];

    if((validatePhoneNumber(numberPhone.value) && validatePackageCode(packageCode.value))) {
        button.disabled = false;
        button.style.background="rgba(238, 45, 36, 255)"
        messages.push("")
    } else {
        button.disabled = true;
        button.style.background="grey"
        messages.push("Numer telefonu musi posiadać 9 cyfr, kod odbioru 4 cyfry.")
    }

    if(messages.length > 0) {
        error.innerText = messages.join(', ')
        error.style.fontSize = "12px"
        error.style.textAlign = "center"
    }
}

form.addEventListener('keyup', (e) => {
   validateData();
   e.preventDefault();
})

function togglePopUp() {
    popUp.style.display = "block";
}



