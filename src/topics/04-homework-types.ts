/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
  name: string;
  age: number;
  address: Address;
  showAddress: () => string;
}

interface Address {
  street: string; //f2 para cambiar todo lo que utilice al nuevo nombre.
  country: string;
  city: string;
}


// Ejercicio: Crear una interfaz que sirva para validar el siguiente objeto
const superHeroe: SuperHero = {
  name: "Spiderman",
  age: 30,
  address: {
    street: "Main St",
    country: "USA",
    city: "NY",
  },
  showAddress() {
    return this.name + ", " + this.address.city + ", " + this.address.country;
  },
};

const address = superHeroe.showAddress();
console.log(address);

export {};
