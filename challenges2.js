// Desafio 10
function techList(tech, name) {
  let i = 0;
  let arrObjts = [];

  if (tech.length > 0) {
    tech.sort();

    for (i = 0; i < tech.length; i += 1) {
      arrObjts.push({
        tech: tech[i],
        name,
      });
    }
    return arrObjts;
  }
  return 'Vazio!';
}
// Complemento 11
function module3Times(arr) {
  let m3T = arr.slice();
  return m3T.sort();
}

function equalizer(a, b) {
  if (a === b) {
    return 1;
  }
  return 0;
}

function check3Times(arr) {
  let chech3times = module3Times(arr);
  let flag = 0;
  for (let i = 0; i <= 10; i += 1) {
    flag += equalizer(chech3times[i], chech3times[i + 1]);
    if (flag < 2 && (chech3times[i] !== chech3times[i + 1])) {
      flag = 0;
    }
  }
  return flag;
}
function numberSlices(arr) {
  arr.unshift('(');
  arr.splice(3, 0, ')');
  arr.splice(4, 0, ' ');
  arr.splice(10, 0, '-');
  return arr.join('');
}
function checkValorNumber(arr) {
  let flag = 0;
  for (let variableB of arr) {
    if (variableB > 9 || variableB < 0) {
      flag = 2;
    }
  }
  return flag;
}
// Desafio 11
function generatePhoneNumber(arrNumber) {
  let finalNumber = '';
  if (arrNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let flag = checkValorNumber(arrNumber);

  if (flag >= 2) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  flag = check3Times(arrNumber);
  if (flag >= 2) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  finalNumber = numberSlices(arrNumber);
  return finalNumber;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC)) {
    return false;
  }

  if (lineB > (lineA + lineC)) {
    return false;
  }

  if (lineC > (lineA + lineB)) {
    return false;
  }

  return true;
}
// Desafio 13
function hydrate(frase) {
  // all things javascript LLC
  let exReg = /\d+/g; // "quero todos os digitos em um escopo global"
  let resultado = frase.match(exReg);
  let fraseR = 0;
  for (let numero of resultado) {
    fraseR += parseInt(numero, 10);
  }
  if (fraseR === 1) {
    return `${1} copo de água`;
  }
  return `${fraseR} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
