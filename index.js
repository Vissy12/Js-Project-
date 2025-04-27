document.getElementById("myForm").addEventListener("submit", function(event) {
event.preventDefault();

let isValid = true;

//Email Validation
let email = document.getElementById("email").value;
let emailError = document.getElementById("emailError");
if(!/^\S+@\S+\.\S+$/.test(email)) {
    emailError.textContent = "Invalid email format";
    isValid = false;
} else {
    emailError.textContent = "";
} 
} 
);

document.getElementById("confirmPassword").addEventListener("input", function() {
    validatePasswords();
});

document.getElementById("password").addEventListener("input", function() {
    validatePasswords();
});

function validatePasswords() {
    // Input elements
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    // Error message elements
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    // Password values
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Regular expression for password validation
    const regex = /^(?=.*[A-Za-z])(?=.*[A-Z])[A-Za-z\d]{8,}$/;

    // Reset error messages
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    // Validate Password
    if (!regex.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters long, with at least 1 uppercase letter and 1 letter.";
    }

    // Validate Confirm Password
    if (confirmPassword && confirmPassword !== password) {
        confirmPasswordError.textContent = "Passwords do not match.";
    }
}

document.getElementById("showpass").addEventListener("change", function() {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    // Toggle input type between 'text' and 'password'
    if (this.checked) {
        passwordInput.type = "text";
        confirmPasswordInput.type = "text";
    } else {
        passwordInput.type = "password";
        confirmPasswordInput.type = "password";
    }
});

document.getElementById("phone").addEventListener("input", function() {
    const phoneInput = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");

    // Get the phone number value
    const phoneNumber = phoneInput.value;

    // Reset error message
    phoneError.textContent = "";

    // Validate phone number (must be exactly 10 digits)
    if (!/^\d{10}$/.test(phoneNumber)) {
        phoneError.textContent = "Phone number must be exactly 10 digits.";
    }
});

document.getElementById("age").addEventListener("input", function() {
    validateAge();
});

document.getElementById("otp").addEventListener("input", function() {
    validateOTP();
});

document.getElementById("terms").addEventListener("change", function() {
    validateTerms();
});

function validateAge() {
    const ageInput = document.getElementById("age");
    const ageError = document.getElementById("ageError");
    const age = ageInput.value;

    ageError.textContent = "";

    // Check if age is valid (e.g., greater than or equal to 18)
    if (age < 18 || age > 100) {
        ageError.textContent = "Age must be between 18 and 100.";
    }
}

function generateRandomOTP() {
    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000); // Ensures OTP is between 100000 and 999999
    return otp;
}

// Event listener for a button to display the OTP (optional)
document.getElementById("generateOtpButton").addEventListener("click", function() {
    const otpInput = document.getElementById("otp");
    const generatedOtp = generateRandomOTP();
    otpInput.value = generatedOtp; // Populate the OTP field
    alert("Your OTP is: " + generatedOtp); // Display OTP (optional)
});


function validateTerms() {
    const termsCheckbox = document.getElementById("terms");
    const termsError = document.getElementById("terms");

    termsError.textContent = "";

    // Check if the Terms & Conditions checkbox is checked
    if (!termsCheckbox.checked) {
        termsError.textContent = "You must accept the Terms & Conditions.";
    }
}

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const phoneInput = document.getElementById("phone");
    const ageInput = document.getElementById("age");
    const otpInput = document.getElementById("otp");
    const termsCheckbox = document.getElementById("terms");

    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const phoneError = document.getElementById("phoneError");
    const ageError = document.getElementById("ageError");
    const otpError = document.getElementById("otpError");
    const termsError = document.getElementById("terms");

    let isValid = true;

    // Reset error messages
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    phoneError.textContent = "";
    ageError.textContent = "";
    otpError.textContent = "";
    termsError.textContent = "";

    // Validate Password
    const regex = /^(?=.*[A-Za-z])(?=.*[A-Z])[A-Za-z\d]{8,}$/;
    if (!regex.test(passwordInput.value)) {
        passwordError.textContent = "Password must be at least 8 characters long, with at least 1 uppercase letter and 1 letter.";
        isValid = false;
    }

    // Validate Confirm Password
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    }

    // Validate Phone Number
    if (!/^\d{10}$/.test(phoneInput.value)) {
        phoneError.textContent = "Phone number must be exactly 10 digits.";
        isValid = false;
    }

    // Validate Age
    if (ageInput.value < 18 || ageInput.value > 100) {
        ageError.textContent = "Age must be between 18 and 100.";
        isValid = false;
    }

    // Validate OTP
    if (!/^\d{6}$/.test(otpInput.value)) {
        otpError.textContent = "OTP must be a 6-digit number.";
        isValid = false;
    }

    // Validate Terms Acceptance
    if (!termsCheckbox.checked) {
        termsError.textContent = "You must accept the Terms & Conditions.";
        isValid = false;
    }

    // Form Submission
    if (isValid) {
        alert("Form submitted successfully!");
        // Add form submission logic here, e.g., sending data to the server
    }
});


