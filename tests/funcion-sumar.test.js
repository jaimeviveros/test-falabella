//const sum = require('./sum');

// generar test

// funcion sumar 
// 1.- si es 0, vacio, null => devuelve
// 2. input = 1,2,3
// 3. validar diferentes tipos de delimitadores

const { sumar } = require ('../src/sumar');

test('si es 0, vacio, null => devuelve', () => {
  const cero = sumar("0");
  expect(cero).toBe(0);

  const vacio = sumar("");
  expect(vacio).toBe(0);

  const nulo = sumar(null);
  expect(nulo).toBe(0);
});

test('input = 1,2,3', () => {
  const contenidoValido = sumar("1,2,3");
  expect(contenidoValido).toBe(6);
});

test('3. validar diferentes tipos de delimitadores', () => {
  const cualquierDilimitador = sumar("1,,,,,2....%$%3");
  expect(cualquierDilimitador).toBe(6);
}) 