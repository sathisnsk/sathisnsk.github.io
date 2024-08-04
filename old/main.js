const subscribeButton = document.querySelector(".subscribe-btn");
subscribeButton.addEventListener("click",emailValidationAndResponse);

const successPage = document.querySelector(".success-page");
successPage.style.display = "none";

function emailValidationAndResponse() {
    const emailInput = document.querySelector(".email-input");
    const emailInputValue = emailInput.value;
    const emailError = document.querySelector(".email-error");
    if (emailInputValue === null || emailInputValue === "") {
     emailError.textContent = "valid email required";
    } else {

        if (!validEmail(emailInputValue)){
            emailError.textContent = "valid email required";  
        }

        const loginForm = document.querySelector(".initial-form-page");
        loginForm.style.display = "none";
        const successPage = document.querySelector(".success-page");
        successPage.style.display = "block";
        const emailIdValue = document.querySelector(".mail-id");
        emailIdValue.textContent = emailInput.value;
    }
    
}

function validEmail(mailId) {
    if (mailId.includes('@'))
    return true;
    return false;

}