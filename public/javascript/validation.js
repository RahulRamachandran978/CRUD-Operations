function validateForm(){
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError")
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError")

    const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if(!emailPattern.test(emailInput.value)){
        emailError.innerHTML="Please enter a valid email adress !";
        return false;
    }else{
        emailError.innerHTML="";
    }

    if(!passwordPattern.test(passwordInput.value)){
        passwordError.innerHTML="Please enter a valid password !"
        return false;
    }else{
        passwordError.innerHTML="";
    }

     // Check if both email and password errors are empty (no errors)
     if (passwordError.innerHTML === "" && emailError.innerHTML === "") {
        console.log('hiiiiiiiiiiiiiiiiiiiiiiiii')
        return true;
    } else {
        return false;
    }
}

