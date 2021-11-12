
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
            email.classList.add("is-invalid")
        }
        else{
            email.classList.remove("is-invalid")
            email.classList.add("is-valid")            
        }
        document.forms[0].classList.add('was-validated')
    }
    
}
