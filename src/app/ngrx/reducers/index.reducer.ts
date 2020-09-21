import { activeRequestReducer } from './active-request.reducer'
import { channelReducer } from './channel.reducer'
import { openActiveRequestDetailReducer } from './open-ar-detail.reducer'
import { ActionReducerMap, MetaReducer, Action} from '@ngrx/store';
import { ActiveRequest } from './../models/active-request.model'
import { Channel } from './../models/channel.model'
import { OpenArDetail } from './../models/open-ar-detail.model'

export interface AppState {
  readonly activeRequests: ActiveRequest[];
  readonly channel: Channel;
  readonly openArDetail: OpenArDetail;
}

export const reducers: ActionReducerMap<AppState> = {
  activeRequests: activeRequestReducer,
  channel: channelReducer,
  openArDetail: openActiveRequestDetailReducer
};

export const selectActiveRequest = (state: AppState) => state.activeRequests;

export const selectChannel = (state: AppState) => state.channel;

export const selectOpenArDetail = (state: AppState) => state.openArDetail;
