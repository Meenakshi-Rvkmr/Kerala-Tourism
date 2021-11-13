
function validateMobile() {
    var phoneno = /(^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$)|(^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$)/;
    let contact = document.getElementById("contactNumber")
    if (contact.value != "") {
        let contactLength = contact.value.replace(/\D/g, '').length;
        let value = phoneno.test(String(contact.value).toLowerCase());
        console.log(contactLength == 10 && value)
        if (contactLength == 10 && value) {
            contact.classList.remove("is-invalid")
            contact.classList.add("is-valid")
            document.getElementById("contactNumber").setCustomValidity("")
        } else {
            document.getElementsByClassName("contactNumber")[0].innerText = "Enter valid 10 digit contact number"
            contact.classList.add("is-invalid")
            contact.classList.remove("is-valid")
            document.getElementById("contactNumber").setCustomValidity("Error")
        }
    }
    contact.classList.add('was-validated')
}

function validate() {
    let form = document.forms[0];
    form.classList.add('was-validated');
    return form.checkValidity()

};

function validateEmail() {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email = document.getElementById("inputEmail3")
    if (email.value != "") {
        let value = re.test(String(email.value).toLowerCase());
        console.log(email.value + "-" + value)
        if (!value) {
            document.getElementsByClassName("emailmessage")[0].innerText = "Enter valid email"
            document.getElementById("inputEmail3").setCustomValidity("Error")
            email.classList.add("is-invalid")
            //email.classList.remove("is-valid")
        }
        else {
            document.getElementById("inputEmail3").setCustomValidity("")
            email.classList.remove("is-invalid")
            email.classList.add("is-valid")
        }
        email.classList.add('was-validated')
    }

}

function validatePassword() {
    //let passre = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
    let passre = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    let password = document.getElementById("inputPassword3")
    if (password.value != "") {        
        let value = passre.test(String(password.value));
        console.log(password.value + "-" + value)
        if (!value) {
            document.getElementById("inputPassword3").setCustomValidity("Error")
            document.getElementsByClassName("inputPassword3")[0].innerText = "Password should be minimum 8 characters, must contain at least one uppercase, one lower case,and at least one number"
            password.classList.add("is-invalid")
            password.classList.remove("is-valid")
        }
        else {
            document.getElementById("inputPassword3").setCustomValidity("")
            password.classList.remove("is-invalid")
            password.classList.add("is-valid")
        }
        document.getElementById("passwordindicatordiv").style.display="flex";
        let bar = document.getElementById("passwordindicator")
        if(passre.test(String(password.value))){
            document.getElementById("progressstr").style.display="flex";
            document.getElementById("progressmed").style.display="flex";
            bar.innerText = "Strong"
        }else if(/^(?=.*[A-Za-z])(?=.*\d)(?=.{4,})/.test(String(password.value))){
            document.getElementById("progressmed").style.display="flex";
            bar.innerText = "Medium"
            document.getElementById("progressstr").style.display="none";
        }else{
            bar.innerText = "Weak"
            document.getElementById("progressstr").style.display="none";
            document.getElementById("progressmed").style.display="none";
        }      
        password.classList.add('was-validated')
    }
}

function matchPassword(){
    let password = document.getElementById("inputPasswordRetype")
    let orgpassword = document.getElementById("inputPassword3").value
    if (password.value != "") {    
        if (password.value == orgpassword) {
            document.getElementById("inputPasswordRetype").setCustomValidity("")
            password.classList.remove("is-invalid")
            password.classList.add("is-valid")            
        }
        else {
            document.getElementById("inputPasswordRetype").setCustomValidity("Error")
            password.classList.add("is-invalid")
            password.classList.remove("is-valid")
        }
        password.classList.add('was-validated')
        
    }
}

function password_show_hide(id) {
    var x = document.getElementById(id);
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
    }
  }