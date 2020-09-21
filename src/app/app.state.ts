import { ActiveRequest } from './ngrx/models/active-request.model';
import { Channel } from './ngrx/models/channel.model';

export interface AppState {
  readonly activeRequests: ActiveRequest[];
  readonly channel: Channel;
}
