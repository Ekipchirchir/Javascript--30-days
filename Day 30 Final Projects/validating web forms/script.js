function validateForm(){
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phoneNumber= document.getElementById('phoneNumber').value;
    const bio = document.getElementById('bio').value;

    const firstNameRegex = /^[A-Za-z\-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const phoneNumberRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

    const errors = [];
    if (!firstNameRegex.test(firstName)) {
        errors.push|('First name is valid.');
    }
    if (!firstNameRegex.test(lastName)) {
        errors.push|('Last name is valid.');
    }
    if (!emailRegex.test(email)) {
        errors.push('Email is valid.');
    }
    if (!passwordRegex.test(password)) {
        errors.push('Password must be at least 8 characters long and contain at leat one uppercase letter, one lowercase letter, and one digit.');
    }
    if (!phoneNumberRegex.test(phoneNumber)) {
        errors.push('Phone number is invalid. Please use the format (123) 456-7890.');
    }
    if (bio.length > 100) {
        errors.push('Bio must be no more than 100 characters  long.');
    }
    const errorContainer = document.getElementById('error-container');
    if (errors.length > 0) {
        errorContainer.innerHTML =errors.join('<br>');
        return false
    }
    else{
        errorContainer.innerHTML = '';
        return true;
    }
}