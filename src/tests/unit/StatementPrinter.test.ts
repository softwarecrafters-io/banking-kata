import { StatementPrinter } from '../../core/StatementPrinter';
import { Console } from '../../core/Console';

describe('The Statement Printer', () => {
	const console = new Console();
	const consoleSpy = jest.spyOn(console, 'log');

	it('always prints the header throughout the console', () => {
		const statementPrinter = new StatementPrinter(console);

		statementPrinter.print([]);

		expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
	});
});
