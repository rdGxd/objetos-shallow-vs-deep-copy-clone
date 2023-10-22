const { cloneDeep } = require("lodash");
// RECOMENDADO USAR O cloneDeep DO lodash quando for clonar um objeto aninhado.
// Se o objeto nao for aninhado usar o shallow copy
const person = {
  firstName: `Rodrigo`,
  lastName: "Silva",
  address: {
    line1: "Av.Brasil",
    line2: "Centro",
  },
};

Object.defineProperty(person, "age", {
  value: 70,
  enumerable: false,
  writable: true,
  configurable: true,
});

const person2 = cloneDeep(person); // Deep copy
const person3 = { ...person }; // Shallow copy
console.log(person.address === person3.address);
