const simbols = '[]\\;\',./{}|:"<>?!@#$%^&*()-_=+~`'; 

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateUpperCase = () => String.fromCharCode(rand(65, 91));

const generateLowerCase = () => String.fromCharCode(rand(97, 123));

const generateNumber = () => String.fromCharCode(rand(48, 58));

const generateSimbols = () => simbols[rand(0, simbols.length)];

const generatorsArray = [
    generateLowerCase,
    generateNumber,
    generateSimbols, generateUpperCase,
]

export default function generatePassword(size, hasLowerCase, hasUpperCase, hasSimbols, hasNumbers){
    const passwordArray = [];
    size = Number(size);

    if(hasLowerCase || hasUpperCase || hasSimbols || hasNumbers){
        for(let i = 0; i < size; i++){
            let isNotValidOperation = true;
            while(isNotValidOperation){
                const operation = rand(0, 4);
                if((operation == 0 && hasLowerCase) || (operation == 1 && hasNumbers) || (operation == 2 && hasSimbols) || (operation == 3 && hasUpperCase)){
                    isNotValidOperation = false;
                    passwordArray.push(generatorsArray[operation]());
                }
            }
        }
    }
   return(passwordArray.join(''))
}


