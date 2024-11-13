import { promisify } from 'util';
import fs from 'fs';

// Zamieniamy fs.readFile na wersję opartą o Promises
const readFileAsync = promisify(fs.readFile);

// Funkcja do odczytu dwóch plików
export const FinalCommand = async () => {
  try {
    // Odczytujemy plik promt.txt z tekstem wstępnym
    const promtContent = await readFileAsync("prompt.txt", 'utf8');
    
    // Odczytujemy plik article.txt z treścią artykułu
    const fileContent = await readFileAsync("article.txt", 'utf8');
    
    // Łączymy obie zawartości
    const command = promtContent + " " + fileContent;
    
    // Zwracamy utworzony FinalCommand
    return command;
  } catch (err) {
    console.error("Błąd przy odczycie plików", err);
    return "";
  }
};
