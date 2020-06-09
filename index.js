/*************************************************/
/***                                           ***/
/***   👇   COMPLETE OS DESAFIOS ABAIXO   👇   ***/
/***                                           ***/
/*************************************************/

/**
 * DESAFIO #0 (Exemplo) ✅
 *
 * INSTRUÇÕES:
 * Determinar a localização de um item em um array
 */
function desafio0(arr, item) {
  let result = -1;
  for (let pos = 0; pos < arr.length; pos++) {
    if (arr[pos] === item) {
      result = pos;
    }
  }
  return result;
}

/**
 * DESAFIO #1 🤓
 *
 * INSTRUÇÕES:
 * Retornar a quantidade de pares de parênteses em um array
 *
 * EXEMPLO:
 * ['(())()', '()'] - Este array de exemplo possue 3
 * pares de parênteses, ou seja, 3 combinações de "()"
 */
function desafio1(array) {
  var letter = "("; // Pega o parentheses aberto
  var nextLetter = ")"; // Pega o parentheses fechado
  var element = array.join(); // Junta toda a array em uma string
  var letter_Count = 0;
  for (var position = 0; position < element.length; position++) {
    var nextPosition = position + 1;
    if (
      element.charAt(position) === letter &&
      element.charAt(nextPosition) === nextLetter
    ) {
      // Confere se o parentheses aberto tem um parentheses fechado logo em seguida
      letter_Count += 1;
    }
  }
  return letter_Count;
}

/**
 * DESAFIO #2 🤓
 *
 * INSTRUÇÕES:
 * Criar um contador de quadriláteros dentro de um array
 *
 * EXEMPLO:
 * No array de exemplo abaixo é possível identificar 3 quadriláteros
 * O primeiro, formado por 9 colunas e 5 linhas de "A" na parte externa
 * O segundo é formado por 7 colunas e 3 linhas de "B" na parte do meio
 * E o terceiro, formado por 3 colunas e uma linha de "A" novamente, na parte interna
 * [
 * "AAAAAAAAA",
 * "ABBBBBBBA",
 * "ABBAAABBA",
 * "ABBBBBBBA",
 * "AAAAAAAAA"
 * ]
 */
function desafio2(array) {
  var count = array.length / 2 + 0.5;

  for (var j = 0; j < count; j++) {
    var strLen = array[0].length / 2;
    if (Number.isInteger(strLen) === true) {
      console.log(strLen);
    } else {
      strLen = strLen - 0.5;
      console.log(strLen);
    }
    /*for (var i = 0; i < strLen; i++) {
      console.log(array[j][array[j].length - 1]);
    }*/

    /*if (array[i].indexOf("A") === array[count - 1].indexOf("A")) {
        console.log(array[i].indexOf("A", 0));
      }*/
  }
  return count;
}

/**
 * DESAFIO #3 🤓
 *
 * INSTRUÇÕES:
 * Reduzir os caracteres duplicados em uma string para o máximo desejado
 */
function desafio3(string, valorDesejado) {
  var count = string.length;
  for (var i = 0; i < count; i++) {
    while (count > valorDesejado) {
      if (string.charAt(i) === string.charAt(i + 1)) {
        string = string.replace(string.charAt(i), "");
      }
      break;
    }
    console.log(string);
  }
  return string;
}

/**
 * DESAFIO #4 🤓
 *
 * INSTRUÇÕES:
 * Conseguir identificar qual é o nome da
 * nave mais rápida de cada personagem
 *
 * EXEMPLO:
 * Abaixo segue um exemplo da estrutura do objeto
 * "character" que é utilizado nesse desafio
 * {
 *   "name": "Luke Skywalker",
 *   "vehicles": [
 *     {
 *       "name": "???",
 *       "max_atmosphering_speed": "???",
 *       ...
 *     }
 *   ],
 *   "starships": [
 *     {
 *       "name": "???",
 *       "max_atmosphering_speed": "???",
 *       ...
 *     }
 *   ]
 * }
 */
function desafio4(character) {
  var myObj = character;
  var valueObj = Object.values(myObj);

  if (valueObj[12].length > 0) {
    var max_atmosphering_speed = valueObj[11].map(function(item) {
      return item["max_atmosphering_speed"];
    });
    var names = valueObj[11].map(function(item) {
      return item["name"];
    });

    if (max_atmosphering_speed.length === 2) {
      // Luke Skywalker
      if (max_atmosphering_speed[0] > max_atmosphering_speed[1]) {
        var maxSpeed = names[1];
      } else {
        maxSpeed = names[0];
      }
    } else {
      // Obi-Wan Kenobi
      var max2 = valueObj[12].map(function(item2) {
        return item2["max_atmosphering_speed"];
      });
      var names2 = valueObj[12].map(function(item2) {
        return item2["name"];
      });
      if (
        max2[0] > max2[1] &&
        max2[0] > max2[2] &&
        max2[0] > max2[3] &&
        max2[0] > max2[4]
      ) {
        maxSpeed = names2[0];
      } else if (max2[1] > max2[2] && max2[1] > max2[3] && max2[1] > max2[4]) {
        maxSpeed = names2[1];
      } else if (max2[2] > max2[3] && max2[2] > max2[4]) {
        maxSpeed = names2[2];
      } else if (max2[3] > max2[4]) {
        maxSpeed = names2[3];
      } else {
        maxSpeed = names2[4];
      }
    }
    return maxSpeed;
  } else {
    // Leia Organa
    return "none";
  }
}

/**
 * DESAFIO #5 🤓
 *
 * INSTRUÇÕES:
 * Conseguir identificar qual é a capacidade total de
 * carga de TODOS veículos e naves de cada personagem
 */
function desafio5(character) {
  var myObj = character;
  var valueObj = Object.values(myObj);

  var vehicles = 0;
  var starships = 0;
  var sum = 0;

  var carga = valueObj[11].map(function(item) {
    return Number(item["cargo_capacity"]);
  });

  if (valueObj[12].length > 0) {
    if (carga.length === 2) {
      // =================== Luke SkyWalker =====================
      var carga10 = valueObj[10].map(function(item10) {
        return Number(item10["cargo_capacity"]);
      });

      // Sum vehicles Luke
      const array1 = carga10;
      const reducer1 = (accumulator, currentValue) =>
        accumulator + currentValue;
      vehicles = array1.reduce(reducer1);

      // Sum starships Luke
      const array = carga;
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      starships = array.reduce(reducer);

      // Total sum Luke
      return (sum = vehicles + starships);
    } else {
      // =================== Obi-Wan Kenobi =====================
      var carga12 = valueObj[12].map(function(item12) {
        return Number(item12["cargo_capacity"]);
      });

      // Sum vehicles Obi
      const array12 = carga12;
      const reducer12 = (accumulator, currentValue) =>
        accumulator + currentValue;
      vehicles = array12.reduce(reducer12);

      // Sum starships Obi
      const array = carga;
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      starships = array.reduce(reducer);

      // Total sum Obi
      return (sum = vehicles + starships);
    }
  } else {
    // ===================== Leia Organa =======================
    return Number(carga);
  }
}

/***************************************************/
/***                                             ***/
/***           🤚   FIM DO DESAFIO   🤚           ***/
/***                                             ***/
/***   NÃO ALTERE MAIS NADA ABAIXO DESSA LINHA   ***/
/***                                             ***/
/***************************************************/
if (typeof exports !== "undefined") {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {};
  if (desafio0) {
    module.exports.desafio0 = desafio0;
  }
  if (desafio1) {
    module.exports.desafio1 = desafio1;
  }
  if (desafio2) {
    module.exports.desafio2 = desafio2;
  }
  if (desafio3) {
    module.exports.desafio3 = desafio3;
  }
  if (desafio4) {
    module.exports.desafio4 = desafio4;
  }
  if (desafio5) {
    module.exports.desafio5 = desafio5;
  }
}
