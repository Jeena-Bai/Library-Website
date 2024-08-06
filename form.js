document.addEventListener('DOMContentLoaded', function () {
    // Login validation
    const loginButton = document.getElementById('log_b');
    if (loginButton) {
        loginButton.addEventListener('click', validateLogin);
    }

    // Signup validation
    const signupButton = document.getElementById('signupButton');
    if (signupButton) {
        signupButton.addEventListener('click', validateSignup);
    }

    function validateLogin(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        let valid = true;

        if (!validateEmail(email)) {
            document.getElementById('error').innerText = 'Invalid email address';
            valid = false;
        } else {
            document.getElementById('error').innerText = '';
        }

        if (password === '') {
            document.getElementById('error').innerText = 'Password cannot be empty';
            valid = false;
        }

        if (valid) {
            alert('Login successful');
            // Redirect to home page
            window.location.href = 'books.html';
        }
    }

    function validateSignup(event) {
        event.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;
        const phone = document.getElementById('signupPhone').value;
        let valid = true;

        if (!validateEmail(email)) {
            document.getElementById('signupEmailError').innerText = 'Invalid email address';
            valid = false;
        } else {
            document.getElementById('signupEmailError').innerText = '';
        }

        const passwordStrength = getPasswordStrength(password);
        if (!validatePassword(password)) {
            document.getElementById('signupPasswordError').innerText = 'Password must be at least 8 characters, include uppercase, lowercase, and a number';
            valid = false;
        } else {
            document.getElementById('signupPasswordError').innerText = passwordStrength.label;
            document.getElementById('signupPasswordError').style.color = passwordStrength.color;
        }

        if (password !== confirmPassword) {
            document.getElementById('signupConfirmPasswordError').innerText = 'Passwords do not match';
            valid = false;
        } else {
            document.getElementById('signupConfirmPasswordError').innerText = '';
        }

        if (!validatePhone(phone)) {
            document.getElementById('signupPhoneError').innerText = 'Invalid phone number';
            valid = false;
        } else {
            document.getElementById('signupPhoneError').innerText = '';
        }

        if (valid) {
            alert('Signup successful');
            // Redirect to login page
            window.location.href = 'login.html';
        }
    }

    // Email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Password validation
    function validatePassword(password) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return re.test(password);
    }

    // Password strength indicator
    function getPasswordStrength(password) {
        let strength = { label: 'Poor', color: 'red' };
        if (password.length >= 8) {
            strength = { label: 'Medium', color: 'orange' };
        }
        if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
            strength = { label: 'Strong', color: 'green' };
        }
        return strength;
    }

    // Phone validation
    function validatePhone(phone) {
        const re = /^(?:\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;
        return re.test(phone);
    }

    // Password strength indicator
    const passwordInput = document.getElementById('signupPassword');
    if (passwordInput) {
        passwordInput.addEventListener('input', function () {
            const strength = getPasswordStrength(passwordInput.value);
            const strengthLabel = document.getElementById('signupPasswordError');
            strengthLabel.innerText = strength.label;
            strengthLabel.style.color = strength.color;
        });
    }
});
