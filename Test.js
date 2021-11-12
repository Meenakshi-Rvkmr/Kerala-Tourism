
function validate() {
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }                          
                form.classList.add('was-validated')
            }, false)
        })
};


function validateEmail() {
    let regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailre = /^[a-zA-Z0–9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0–9](?:[a-zA-Z0–9-]{0,61} [a-zA-Z0–9])?(?:\.[a-zA-Z0–9](?:[a-zA-Z0–9-]{0,61}[a-zA-Z0–9])?)*$/
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
    }
    
}