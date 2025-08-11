//<T> lo transforma en una funcion generica.
export function whatsMyType<T>(argument: T): T {
  return argument;
}

/* let amIString = whatsMyType("Hola Mundo"); */
let amIString = whatsMyType<string>("Hola Mundo");
let amINumber = whatsMyType<number>(26);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(amIString.split(" "));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));
