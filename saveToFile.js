import fs from 'fs';

export const saveToFile = (content, filename = 'artykul.html') => {
	fs.writeFile(filename, content, 'utf8', (err) => {
		if (err) {
			console.error('Błąd przy zapisie do pliku:', err);
		} else {
			console.log(`Plik ${filename} został zapisany pomyślnie!`);
		}
	});
};
