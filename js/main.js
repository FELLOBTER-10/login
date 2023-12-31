'use strict'

let signinName = document.getElementById('signinName')
let signinEmail = document.getElementById('signinEmail')
let signinPassword = document.getElementById('signinPassword')
let exist = document.getElementById('exist')
let inputEmail = document.getElementById('inputEmail')
let inputPassword = document.getElementById('inputPassword')
let incorrect = document.getElementById('incorrect')
let userName = document.getElementById('userName')
let regexName = /^[A-Za-z]{3,16}[0-9]?$/
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let regexpassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
let signupArray = []

if (localStorage.getItem('registarData') != null) {
    signupArray = JSON.parse(localStorage.getItem('registarData'))
    console.log(signupArray)
}

let AllName = localStorage.getItem('allName')
if (AllName) {
    userName.innerHTML = 'welcome ' + AllName
}


function registar() {


    if (ValidName() == true && ValidEmail() == true && ValidPassword() == true) {
        let Data = {
            name: signinName.value,
            email: signinEmail.value,
            pass: signinPassword.value,
        }

        signupArray.push(Data)
        localStorage.setItem('registarData', JSON.stringify(signupArray))
        Delete()
        exist.innerHTML = 'Success'
        exist.style.color = "green"
    }


    else if (inputsRequired() == true) {
        exist.innerHTML = 'All inputs is required '
        exist.style.color = 'red'
    }

    else if (emailsExists() == true) {
        exist.innerHTML = ' email already exists'
        exist.style.color = 'red'
    }
}

function inputsRequired() {
    if (signinName.value == '' || signinEmail.value == '' || signinPassword.value == '') {
        return true
    } else {
        return false
    }
}


function emailsExists() {
    for (let i = 0; i < signupArray.length; i++) {
        if (signupArray[i].email.toLowerCase() == signinEmail.value.toLowerCase() == true) {
            return true;
        } else {
            return false;
        }
    }
}


function logIn() {
    for (let i = 0; i < signupArray.length; i++) {
        if (signupArray[i].email.toLowerCase().includes(inputEmail.value) == true && signupArray[i].pass == inputPassword.value == true) {
            localStorage.setItem('allName', signupArray[i].name)
            location.href = 'home.html'
        }
        else {
            incorrect.innerHTML = 'incorrect email or password'
        }

    }
}

function logOut() {
    location.href = 'index.html'
    localStorage.removeItem('allName')
}

function Delete() {
    signinName.value = ''
    signinEmail.value = ''
    signinPassword.value = ''
}

function ValidName() {
    if (regexName.test(signinName.value) == true) {
        return true
    }
    else {
        return false
    }
}

function ValidEmail() {
    if (regexEmail.test(signinEmail.value) == true) {
        return true
    }
    else {
        return false
    }
}

function ValidPassword() {
    if (regexpassword.test(signinPassword.value) == true) {
        return true
    }
    else {
        return false
    }
}


