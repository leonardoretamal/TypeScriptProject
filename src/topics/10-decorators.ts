function classDocorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}

@classDocorator
export class SuperClass {
  public myProperty: string = "Abc123";

  print() {
    console.log("Hola mundo...");
  }
}

//DEFINICION DE LA CLASE
console.log(SuperClass);

//creación de instancia

const myClass = new SuperClass();

console.log(myClass);
