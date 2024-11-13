import { promisify } from 'util';
import fs from 'fs';

// Zamieniamy fs.readFile na wersję opartą o Promises
const readFileAsync = promisify(fs.readFile);

export const promt = "Podaje Ci text do zredagowania, proszę zmień go. Tekst znajduje się po dwu kropku:";

export const FinalCommand = async () => {
  try {
    // Odczytujemy plik w sposób asynchroniczny
    const fileContent = await readFileAsync("article.txt", 'utf8');
    
    // Łączymy tekst z zawartością pliku
    const command = promt + " " + fileContent;
    
    // Zwracamy utworzony FinalCommand
    return command;
  } catch (err) {
    console.error("Błąd przy odczycie pliku", err);
    return "";
  }
};

// Użycie FinalCommand
FinalCommand().then((finalCommand) => {
  console.log(finalCommand);  // Wypisuje FinalCommand po zakończeniu odczytu pliku
});
export var finalCommand;