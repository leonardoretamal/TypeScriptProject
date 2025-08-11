function addNumbers(a: number, b: number) {
  return a + b;
}

const result: number = addNumbers(1, 2);

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`; //nos perite hacer una inyeccion literal
};

const result2: string = addNumbersArrow(3, 4);

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
) {
  return firstNumber * base;
} // se recomienda primero poner los obligatorios y luego los opcionales y por ultimo los por defecto

const result3: number = multiply(5);

console.log({ result, result2, result3 });

export {};
