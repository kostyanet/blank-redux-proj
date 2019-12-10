import moment from 'moment';
import { isoDateToMoment, momentToIso } from '../utils';


describe('Common utils', () => {
	
	describe('Function `momentToIso`', () => {
		it('should convert Moment object', () => {
			const mom = moment("25-11-2019", "DD-MM-YYYY").utc(true);
			const result = momentToIso(mom);
			expect(result).toBe('2019-11-25T00:00:00.000Z');
		});
		
		it('should pass through an invalid input', () => {
			const str = null;
			const result = momentToIso(str);
			expect(result).toBe(null);
		});
	});


	describe('Function `isoDateToMoment`', () => {
		it('should convert correct ISO string', () => {
			const str = '2019-09-20T12:00:00.000Z';
			const result = isoDateToMoment(str).toISOString();
			expect(result).toBe(str);
		});

		it('should pass through incorrect input', () => {
			const str = '123 random';
			const result = isoDateToMoment(str);
			expect(result).toBe(str);
		});
	});

});
