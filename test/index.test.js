/***********************************************/
/***                                         ***/
/***   🤚   NÃO MODIFIQUE ESTE ARQUIVO   🤚   ***/
/***                                         ***/
/***********************************************/
/* eslint-env mocha */
if (typeof exports !== "undefined") {
  // IGNORE: Test/Env Detection Stuff //
  // Node/Non-browser test env
  var lukeSkywalker = require("../data/person-1.json");
  var leiaOrgana = require("../data/person-5.json");
  var obiWanKenobi = require("../data/person-10.json");

  var chai = require("chai");
  var {
    desafio0,
    desafio1,
    desafio2,
    desafio3,
    desafio4,
    desafio5
  } = require("../index.js");
}
var expect = chai.expect;

describe("Arrays", function() {
  it("DESAFIO #0 (Exemplo): Determinar a localização de um item em um array", function() {
    let arr = [1, 2, 3, 4];
    expect(desafio0(arr, 3)).to.eql(2);
    expect(desafio0(arr, 5)).to.eql(-1);
  });

  it("DESAFIO #1: Retornar a quantidade de pares de parênteses em um array", function() {
    let arr = ["((()))", "(()())", "(())()", "()(())", "()()()"];
    expect(desafio1(arr)).to.eql(10);
  });

  it("DESAFIO #2: Criar um contador de quadriláteros dentro de um array", function() {
    let arr1 = ["AAAA", "ABBA", "AAAA"];
    let arr2 = [
      "AAAAAAAAAAA",
      "AABBBBBBBAA",
      "AABCCCCCBAA",
      "AABCAAACBAA",
      "AABCADACBAA",
      "AABCAAACBAA",
      "AABCCCCCBAA",
      "AABBBBBBBAA",
      "AAAAAAAAAAA"
    ];
    expect(desafio2(arr1)).to.eql(2);
    expect(desafio2(arr2)).to.eql(5);
  });
});

describe("Strings", function() {
  it("DESAFIO #3: Reduzir caracteres duplicados em uma string para o máximo desejado", function() {
    expect(desafio3("aaaabbbb", 2)).to.eql("aabb");
    expect(desafio3("xaaabbbb", 2)).to.eql("xaabb");
    expect(desafio3("aaaabbbb", 1)).to.eql("ab");
    expect(desafio3("aaxxxaabbbb", 2)).to.eql("aaxxbb");
  });
});

describe("Objects", function() {
  describe("DESAFIO #4: Qual é o nome da nave mais rápida?", function() {
    it("Nave mais rápida do Luke", function() {
      expect(desafio4(lukeSkywalker)).to.eq(`X-wing`);
    });
    it("Nave mais rápida da Leia", function() {
      expect(desafio4(leiaOrgana)).to.eq(`none`);
    });
    it("Nave mais rápida do Obi-Wan", function() {
      expect(desafio4(obiWanKenobi)).to.eq(`Jedi Interceptor`);
    });
  });

  describe("DESAFIO #5: Qual é a capacidade total de carga de TODOS veículos e naves?", function() {
    it("Carga total esperada do Luke", function() {
      expect(desafio5(lukeSkywalker)).to.eq(80124);
    });
    it("Carga total esperada da Leia", function() {
      expect(desafio5(leiaOrgana)).to.eq(4);
    });
    it("Carga total esperada do Obi-Wan", function() {
      expect(desafio5(obiWanKenobi)).to.eq(50001860);
    });
  });
});
