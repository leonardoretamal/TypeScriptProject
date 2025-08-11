interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

// ctrl + . para ver sugerencias.
const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 30,
  song: "Specter",
  details: {
    author: "Bad Omens",
    year: 2025,
  },
};

const song = "New Song";

// desestructuración de un objeto
const {
  song: AnothersSong,
  songDuration: duration,
  details, //pasamos el objeto details completo
  //  details: { author }, facil perderse con esta sintaxis
} = audioPlayer;

//y luego podemos acceder a sus propiedades
const { author, year } = details;

console.log(".:::Destructuring Object:::.");
console.log("Song: ", AnothersSong);
console.log("Duration: ", duration);
console.log("Author: ", author);
console.log("Year: ", year);
//ejemplos sin destructuring
/* console.log(audioPlayer.song);
console.log(audioPlayer.details.author); */

//desestructuracion de arrays
console.log(".:::Destructuring Arrays:::.");
const [, , trunks = "Not Found"] = ["Goku", "Vegeta"]; // asignamos un valor por defecto en caso de que no exista
console.log("personaje 3: ", trunks);

export {};
