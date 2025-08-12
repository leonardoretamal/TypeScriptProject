export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Leonardo",
};

const passenger2: Passenger = {
  name: "Aylin",
  children: ["Marley", "Raul"],
};

const returnChildrenNumber = (passenger: Passenger): number => {
  const { name } = passenger;

  const howManyChildren = passenger.children?.length || 0; //el ? le agrega el si es que existe haga el length
  //const howManyChildren = passenger.children!.length; //el ! le agrega el que siempre vendrá ese dato si o si.

  console.log(name + " tiene " + howManyChildren + " hijos");
  return howManyChildren;
};

returnChildrenNumber(passenger1);
