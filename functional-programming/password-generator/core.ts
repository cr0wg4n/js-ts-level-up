const ALPHABET = {
  uppercase: 'abcdefghijklmnopqrstuvwxyz',
  lowercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
}
const NUMBERS = '1234567890'
const SYMBOLS = `~\`!@#$%^&*()_-+={[}]|\\:;"'<,>.?/`

const array = {
  concat: (a, b) => a.concat(b),
  indentity: [] 
} 

export const getRandomChar = (charSet: string[]) => {
  const index =  Math.floor(Math.random() * charSet.length)
  return charSet[index]
} 

export const generatePassword = (length: number, charSet: string[]) => {
  return Array.from({ length }, () => getRandomChar(charSet)).join('')
}

const charSet = [ALPHABET.lowercase, ALPHABET.uppercase, NUMBERS, SYMBOLS]

const completeCharSet = charSet.reduce(
  (accumulator, actual) => array.concat(accumulator, actual.split('')), 
  []
) 

const newPassword = generatePassword(33, completeCharSet)
console.log(newPassword);
