function addNumbers(a: number, b: number) {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`; //nos perite hacer una inyeccion literal
};

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
) {
  return firstNumber * base;
} // se recomienda primero poner los obligatorios y luego los opcionales y por ultimo los por defecto

/* const result: number = addNumbers(1, 2);
const result2: string = addNumbersArrow(3, 4);
const result3: number = multiply(5);
console.log({ result, result2, result3 }); */

interface Character {
  name: string;
  hp: number;
  //en una interface se puede definir un metodo con una funcion flecha
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};
healCharacter(strider, 10);
healCharacter(strider, 30);
healCharacter(strider, 80);

strider.showHp();

export {};
