import { of, throwError } from 'rxjs';

import { buildQuery, fetchListEpic } from '../marketsListEpics';
import { CONFIG } from '../../../other/config';
import { marketsListInitialState } from '../../initialGlobalState';
import { er } from '../../../store/utils';
import { retrieveMarketsList } from '../../actions/marketsListActions';
import { treeItemsList } from '../../fakeData/treeItemsList';


const fakeStore = {
	marketsList: marketsListInitialState
};

describe('Markets List Epics', () => {
	describe('Function `buildQuery`', () => {
		it('should return expected query string for default options', () => {
			const requestParams = marketsListInitialState.requestParams;
			const { fromDateTime, toDateTime } = requestParams;
			const expected = `${CONFIG.ENDPOINTS.MARKETS_LIST}?fromDateTime=${fromDateTime}&toDateTime=${toDateTime}`;
			expect(buildQuery(requestParams)).toBe(expected);
		});
	});
	
	describe('Epic `fetchListEpic`', () => {
		let http, runner;
		beforeEach(() => {
			const action = retrieveMarketsList.request();
			http = { get: () => of(treeItemsList) };
			runner = er(fetchListEpic, fakeStore, action, { http });
		});
		
		it('should call `http` service', (done) => {
			const spy = spyOn(http, 'get');
			const requestParams = marketsListInitialState.requestParams;
			runner(acts => {
				expect(spy).toHaveBeenCalledWith(buildQuery(requestParams));
				done();
			})
		});
		
		it('should dispatch on success', (done) => {
			const expectedAction = retrieveMarketsList.success({ list: treeItemsList });
			runner(acts => {
				expect(acts[0]).toEqual(expectedAction);
				done();
			});
		});
		
		it('should dispatch on error', (done) => {
			const err = new Error('Test err');
			http.get = () => throwError(err);
			const expectedAction = retrieveMarketsList._testError(err);
			runner(acts => {
				expect(acts[0]).toEqual(expectedAction);
				done();
			});
		});
	});
	
	
});
