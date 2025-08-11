const skills: string[] = ["bash", "counter", "healing"]; //puedo especificar el tipo al poner :string pero si no pongo nada ts se lo toma como any[]

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["bash", "counter"],
  hometown: undefined,
};

strider.hometown = "Rivendell";

console.table(strider);

export {}; //objeto vacio literal para que ts lo tome como modulo
