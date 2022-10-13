import generatePassword from "./generators";

const generatedPassword = document.querySelector('.generated-password');
const size = document.querySelector('.size');
const uppercase = document.querySelector('.uppercase-checkbox');
const lowercse = document.querySelector('.lowercse-checkbox');
const number = document.querySelector('.number-checkbox ');
const simbols = document.querySelector('.simbols-checkbox');
const generatePasswordButton = document.querySelector('.generate-password');


export default () => {
    generatePasswordButton.addEventListener('click', () => {
        const password = generatePassword(
            size.value,
            lowercse.checked,
            uppercase.checked,
            simbols.checked,
            number.checked,
        );

        generatedPassword.innerHTML = password || 'falha';
    });
}