import { TransactionRepository } from './TransactionRepository';

export class Account {
	constructor(private repository: TransactionRepository) {}

	deposit(number: number) {
		this.repository.addDeposit(number);
	}

	withdraw(number: number) {}

	printStatement() {}
}
