import * as fromChannel from './channel.actions';

describe('loadChannels', () => {
  it('should return an action', () => {
    expect(fromChannel.loadChannels().type).toBe('[Channel] Load Channels');
  });
});
