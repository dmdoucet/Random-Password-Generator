const passwordBox = document.getElementById("password");
const passwordLength = 15;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "/!@#$%^&*()-=_+{}|[]~";
const allCharacters = upperCase + lowerCase + numbers + symbols;

function generateRandomPassword() {
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(passwordLength > password.length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    passwordBox.value = password;
}