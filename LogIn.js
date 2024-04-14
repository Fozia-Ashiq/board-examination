function validateForm() {
    var emailField = document.getElementById("email-field").value;
    var passwordField = document.getElementById("password-field").value;
    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");
    var valid = true;

    // Email validation
    if (!emailField.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Please enter a valid email";
        valid = false;
    } else {
        emailError.innerHTML = "";
    }

    // Password validation
    if (passwordField.length < 8) {
        passwordError.innerHTML = "Password must be at least 8 characters long";
        valid = false;
    } else {
        passwordError.innerHTML = "";
    }
    if (valid) {
        alert("Login successful!");
    }
}
