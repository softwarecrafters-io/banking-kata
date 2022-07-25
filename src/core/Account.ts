import { TransactionRepository } from './TransactionRepository';
import { StatementPrinter } from './StatementPrinter';

export class Account {
	constructor(private repository: TransactionRepository, private statementPrinter: StatementPrinter) {}

	deposit(number: number) {
		this.repository.addDeposit(number);
	}

	withdraw(number: number) {
		this.repository.addWithdrawal(number);
	}

	printStatement() {
		this.statementPrinter.print(this.repository.allTransactions());
	}
}
