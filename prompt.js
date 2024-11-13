import { promisify } from 'util';
import fs from 'fs';

const readFileAsync = promisify(fs.readFile);

export const FinalCommand = async () => {
	try {
		const promtContent = await readFileAsync('prompt.txt', 'utf8');

		const fileContent = await readFileAsync('article.txt', 'utf8');

		const command = promtContent + ' ' + fileContent;

		return command;
	} catch (err) {
		console.error('Błąd przy odczycie plików', err);
		return '';
	}
};
