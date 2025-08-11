//las clases es una manera de crear un molde para esa misma instancia.
export class Person {
  //son variables pero como estan dentro de la clase se les conoce como
  //properties
  /*  public name: string;
  private address: string; */

  //y las funciones dentro de la clase se conocen como métodos.
  constructor(
    public firstName: string,
    public lastName: string,
    private address: string = "No address"
  ) {}
}

/* export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    super(realName, "New York");
  }
} */
export class Hero {
  //public person: Person;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    //this.person = new Person(realName);
  }
}

/* const tony = new Person("Tony Stark", "New York"); */
const tony = new Person("Tony", "Stark", "New York");

const ironman = new Hero("Iron Man", 45, "Tony", tony);

/* console.log(ironman.addres); */
console.log(ironman);
