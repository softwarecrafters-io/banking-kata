import { Clock } from './Clock';
import { Transaction } from './Transaction';

export class TransactionRepository {
	transactions: Transaction[] = [];
	constructor(private clock: Clock) {}

	allTransactions() {
		return this.transactions;
	}

	addDeposit(amount: number) {
		this.transactions.push(new Transaction(this.clock.todayAsString(), amount));
	}

	addWithdrawal(amount: number) {}
}
