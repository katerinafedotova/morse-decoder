const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let array = []
  for (let i = 0; i < expr.length; i+= 10){
    array.push(expr.slice(i, i+10))
  }

  let arrayWithWhitespace = array.map(el => el === '**********' ? ' ' : el)
  let morseArray = arrayWithWhitespace.map (el => el.replace(/10/g, '.')
  .replace(/11/g, '-')
  .replace(/00/g, ''))
  let decodedArray = morseArray.map(el => el !== ' ' ? MORSE_TABLE[el] : ' ')
  return decodedArray.join('') 
}

module.exports = {
    decode
}