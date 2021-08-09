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
    // write your solution here
    chanks = [];
    var j = 0;
    while ( j < expr.length){
        endOfChank = j + 10;
        chank = expr.slice(j, endOfChank);
        chanks.push(chank);
        j = endOfChank;
    }

    morsecode = []
    for (let i = 0; i < chanks.length; i++) {
        if (chanks[i] === '**********') {
            morsecode.push(' ');
        }
        else {
            morsecode.push(parseInt(chanks[i], 10).toString().replace(/10/g, '.').replace(/11/g, '-'));
        }
    }

    decoded = '';
    for(let i = 0; i < morsecode.length; i++) {
        if (morsecode[i] === ' ') {
            decoded = decoded + ' ';
            continue;
        }
        else {
            let letter = MORSE_TABLE[morsecode[i]];
            decoded = decoded + letter;
        }
    }
    return decoded;
}

module.exports = {
    decode
}

