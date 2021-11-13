
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
            document.getElementById("inputEmail3").setCustomValidity("Error")
            document.getElementsByClassName("emailmessage")[0].innerText = "Enter valid email"
            email.classList.add("is-invalid")
        }
        else{
            document.getElementById("inputEmail3").setCustomValidity("")
            email.classList.remove("is-invalid")
            email.classList.add("is-valid")            
        }
        document.forms[0].classList.add('was-validated')
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