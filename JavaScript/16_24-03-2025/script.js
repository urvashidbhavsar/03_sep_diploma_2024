function validateform() {
    let pname = document.getElementById("pername")
    if (pname.value == "") {
        document.getElementById("msg1").innerHTML = "Enter name"
    }

    let no = document.getElementById("mobileno")
    if (no.value == "") {
        document.getElementById("msg2").innerHTML = "Enter Mobile no"
    }

    let mail = document.getElementById("email")
    if (mail.value == "") {
        document.getElementById("msg3").innerHTML = "Enter Email Address"
    }

    let pwd = document.getElementById("pass")
    if (pwd.value == "") {
        document.getElementById("msg4").innerHTML = "Enter Password"
    }

    let city = document.getElementById("city")
    if (city.value == "-1") {
        document.getElementById("msg5").innerHTML = "Enter City"
    } else {
        document.getElementById("msg5").innerHTML = ""
    }

    let male = document.getElementById("m")
    let female = document.getElementById("f")
    if (male.checked == false && female.checked == false) {
        document.getElementById("msg6").innerHTML = "Select Gender"
    } else {
        document.getElementById("msg6").innerHTML = ""
    }

    let files = document.getElementById("file")
    if (files.value == "") {
        document.getElementById("msg7").innerHTML = "Select File"
    } else {
        document.getElementById("msg7").innerHTML = ""
    }

    return false

}

// ==================================== 
function checkname() {
    let pname = document.getElementById("pername")
    let ptn = /^[a-zA-Z.\s]{2,15}$/
    if (ptn.test(pname.value)) {
        document.getElementById("msg1").innerHTML = ""
    } else {
        document.getElementById("msg1").innerHTML = "Invalid name!!!"
    }
    return false
}
// ============================= 
function checkno() {
    let no = document.getElementById("mobileno")
    let ptn = /^[0-9]*$/
    if (!ptn.test(no.value)) {
        document.getElementById("msg2").innerHTML = "Invalid Number!!!"
    } else if (no.value.length < 10) {
        document.getElementById("msg2").innerHTML = "Enter 10 Digit Number"
    } else {
        document.getElementById("msg2").innerHTML = ""
    }
    return false
}

function checkEmail() {
    let mail = document.getElementById("email")
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(mail.value)) {
        document.getElementById("msg3").innerHTML = ""
    } else {
        document.getElementById("msg3").innerHTML = "Invalid Email Address!!!"
    }
    return false
}

function checkPassword() {
    let pwd = document.getElementById("pass")
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (regex.test(pwd.value)) {
        document.getElementById("msg4").innerHTML = ""
    } else {
        document.getElementById("msg4").innerHTML = "Invalid Password!!!"
    }
    return false
}
// ==============================
function showpassword() {
    let pwd = document.getElementById("pass")
    let icon = document.getElementById("myicon")
    if (pwd.type == "password" && icon.classList.contains("bi-eye")) {
        pwd.type = "text"
        icon.classList.remove("bi-eye")
        icon.classList.add("bi-eye-slash")
    } else {
        pwd.type = "password"
        icon.classList.remove("bi-eye-slash")
        icon.classList.add("bi-eye")
    }
}