import { Transaction } from './Transaction';
import { Console } from './Console';

export class StatementPrinter {
	private readonly header = 'Date | Amount | Balance';

	constructor(private console: Console) {}

	print(transactions: Transaction[]) {
		this.console.log(this.header);
		if (transactions.length > 0) {
			this.console.log(
				`${transactions[0].date} | ${transactions[0].amount.toFixed(2)} | ${transactions[0].amount.toFixed(2)}`
			);
		}
	}
}
