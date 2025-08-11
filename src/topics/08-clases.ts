//las clases es una manera de crear un molde para esa misma instancia.
export class Person {
  //son variables pero como estan dentro de la clase se les conoce como
  //properties
 /*  public name: string;
  private address: string; */

  //y las funciones dentro de la clase se conocen como métodos.
  constructor(
    public name: string,
    private address: string = 'No address'
    ) {
    
  }
}

const ironman = new Person("Iron Man");

/* console.log(ironman.addres); */
console.log(ironman);
