import { StatementPrinter } from '../../core/StatementPrinter';
import { Console } from '../../core/Console';
import { Transaction } from '../../core/Transaction';

describe('The Statement Printer', () => {
	const console = new Console();
	const consoleSpy = jest.spyOn(console, 'log');

	it('always prints the header throughout the console', () => {
		const statementPrinter = new StatementPrinter(console);

		statementPrinter.print([]);

		expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
	});

	it('prints a statement of account including a given transaction throughout the console', () => {
		const statementPrinter = new StatementPrinter(console);
		const transactions = [new Transaction('25/03/2022', 500)];

		statementPrinter.print(transactions);

		expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
		expect(consoleSpy).toHaveBeenCalledWith('25/03/2022 | 500.00 | 500.00');
	});
});
