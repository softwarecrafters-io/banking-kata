import { Transaction } from './Transaction';
import { Console } from './Console';

export class StatementPrinter {
	constructor(private console: Console) {}

	print(transactions: Transaction[]) {
		this.console.log('Date | Amount | Balance');
	}
}
