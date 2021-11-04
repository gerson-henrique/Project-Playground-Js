// Desafio 1

function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringA) {
  return stringA.split(' ');
}

// Desafio 4
function concatName(arrB) {
  let stringB = '';

  for (let i = arrB.length - 1; i >= 0; i -= 1) {
    if (i === arrB.length - 1) {
      stringB = arrB[i];
    } else if (i === 0) {
      stringB = `${stringB}, ${arrB[i]}`;
    }
  }
  return stringB;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Complementar 6
function getHighest(arrC) {
  let highest = arrC[0];
  for (let variable of arrC) {
    if (highest < variable) {
      highest = variable;
    }
  }
  return highest;
}

// Desafio 6
function highestCount(arrC) {
  let highest = getHighest(arrC);
  let times = 0;

  for (let variable of arrC) {
    if (highest === variable) {
      times += 1;
    }
  }

  return times;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Complementar 8
function checkFizzBuzzBug(numberTested) {
  if (numberTested % 3 === 0 && numberTested % 5 === 0) {
    return 'fizzBuzz';
  }
  if (numberTested % 3 === 0) {
    return 'fizz';
  }
  if (numberTested % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

// Desafio 8
function fizzBuzz(arrD) {
  let arrFizzBuzz = [];
  for (let i = 0; i < arrD.length; i += 1) {
    arrFizzBuzz[i] = checkFizzBuzzBug(arrD[i]);
  }
  return arrFizzBuzz;
}

// Complementar 9

function encriptyLetterAEI(letterChecked) {
  switch (letterChecked) {
  case 'a':
    return 1;
  case 'e':
    return 2;
  case 'i':
    return 3;
  default:
    return letterChecked;
  }
}
function encriptyLetterOU(letterChecked) {
  switch (letterChecked) {
  case 'o':
    return 4;
  case 'u':
    return 5;
  default:
    return letterChecked;
  }
}

// Desafio 9
function encode(simpleWord) {
  let arrWord = [];
  let arrCode = [];
  arrWord = simpleWord.split('');

  for (let i = 0; i < arrWord.length; i += 1) {
    arrCode[i] = encriptyLetterAEI(arrWord[i]);

    if (arrWord[i] === 'o' || arrWord[i] === 'u') {
      arrCode[i] = encriptyLetterOU(arrWord[i]);
    }
  }
  return arrCode.join('');
}
// Complementar 9.2

function decriptyLetterAEI(letterChecked) {
  switch (letterChecked) {
  case '1':
    return 'a';
  case '2':
    return 'e';
  case '3':
    return 'i';
  default:
    return letterChecked;
  }
}
function decriptyLetterOU(letterChecked) {
  switch (letterChecked) {
  case '4':
    return 'o';
  case '5':
    return 'u';
  default:
    return letterChecked;
  }
}

// Desafio 9.2
function decode(codedWord) {
  let arrWord = [];
  let arrCode = [];
  arrWord = codedWord.split('');

  for (let i = 0; i < arrWord.length; i += 1) {
    arrCode[i] = decriptyLetterAEI(arrWord[i]);
    if (arrWord[i] === '4' || arrWord[i] === '5') {
      arrCode[i] = decriptyLetterOU(arrWord[i]);
    }
  }
  return arrCode.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
