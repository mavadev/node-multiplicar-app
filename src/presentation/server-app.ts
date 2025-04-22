import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';

interface RunOptions {
	base: number;
	limit: number;
	showTable: boolean;
	fileName: string;
	fileDestination: string;
}

export class ServerApp {
	static run({ base, limit, showTable, fileName, fileDestination }: RunOptions) {
		console.log('Server running ..');

		// Creación de la tabla
		const table = new CreateTable().execute({ base, limit });

		// Mostrar la tabla
		if (showTable) console.log(table);

		// Guardar la tabla
		const wasCreated = new SaveFile().execute({ fileContent: table, fileName, fileDestination });
		console.log(wasCreated ? 'File created!' : 'File not created!');
	}
}
