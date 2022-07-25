import { Clock } from '../../core/Clock';

class TestableClock extends Clock {
	protected today(): Date {
		return new Date('2022-03-20');
	}
}

describe('The Clock', () => {
	it('gets today date in dd/mm/yyyy format', () => {
		const clock = new TestableClock();

		const date = clock.todayAsString();

		expect(date).toEqual('20/03/2022');
	});
});
