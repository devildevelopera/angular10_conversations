import * as fromActiveRequest from './active-request.actions';

describe('loadActiveRequests', () => {
  it('should return an action', () => {
    expect(fromActiveRequest.loadActiveRequests().type).toBe('[ActiveRequest] Load ActiveRequests');
  });
});
