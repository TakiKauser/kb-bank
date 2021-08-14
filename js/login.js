document.getElementById("login-submit-btn").addEventListener("click", function(){
    // console.log("Clicked");

    // get user email
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    // console.log(userEmail);

    // get user password
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;
    // console.log(userPassword);

    // condition check
    if (userEmail == "t@kb.com" && userPassword == "fft???"){
        // console.log("Valid User");
        window.location.href = "banking.html";
    }
    else{
        console.log("you'ren't the person!");
    }
});