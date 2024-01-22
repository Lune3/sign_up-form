const password = document.querySelector("#password");
const submitButton = document.querySelector("button");
const confirmPassword = document.querySelector("#confirmPassword");
const passwordNotMatchingAlert = document.querySelector(".alertText");
submitButton.addEventListener("click",() =>{
    if(password.value != confirmPassword.value){
        console.log(4);
        passwordNotMatchingAlert.textContent = "Password Not Matching";
    }
})