"use strict"

function checkSurname() {
    let surname = document.getElementById("surname");
    document.getElementById("errorMessageSurname").innerHTML= "";
    if(surname.value == '') {
        document.getElementById('errorMessageSurname').innerHTML+= "Введите фамилию<br>";
    }
}

function checkName() {
    let name = document.getElementById("name");
    document.getElementById("errorMessageName").innerHTML= "";
    if(name.value == '') {
        document.getElementById('errorMessageName').innerHTML+= "Введите имя<br>";
    }
}

function checkPhone() {
    let phone = document.getElementById("phone");
    document.getElementById("errorMessagePhone").innerHTML= "";
    if(email.value == '')  {
        document.getElementById('errorMessagePhone').innerHTML+= "Введите мобильный телефон<br>";
    }
}

function checkEmail() {
    let email = document.getElementById("email");
    
    document.getElementById("errorMessageEmail").innerHTML= "";
    if(email.value == '')  {
        document.getElementById('errorMessageEmail').innerHTML+= "Введите электронную почту<br>";
    }
}

function clickWellcome() {
    let surnameWell = document.getElementById("surname");
    let nameWell = document.getElementById("name");
    let phoneWell = document.getElementById("phone");
    let emailWell = document.getElementById("email")

    let nameInput = document.getElementById("name").value;
    
    if(surnameWell.value.length>=1 && nameWell.value.length>=1 && phoneWell.value.length>=1 && emailWell.value.length>=1) {
        confirm('Добро пожаловать, ' + nameInput +'!');
    }
}
