import { Action } from '@ngrx/store'
import { Channel } from './../models/channel.model'
import * as ChannelActions from './../actions/channel.actions'

const initialState: Channel = {
  chat: {
    status: 'Ready',
    subStatus: 'Ready'
  },
  email: {
    status: 'Ready',
    subStatus: 'Ready'
  },
  voice: {
    status: 'Ready',
    subStatus: 'Ready'
  }
}

export function channelReducer(state: Channel = initialState, action: ChannelActions.Actions) {
  switch (action.type) {
    case ChannelActions.UPDATE_CHANNEL:
      return action.payload;

    default:
      return state;
  }
}
