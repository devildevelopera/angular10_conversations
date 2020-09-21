import { createAction, props } from '@ngrx/store';

export const loadChannels = createAction(
  '[Channel] Load Channels'
);

export const loadChannelsSuccess = createAction(
  '[Channel] Load Channels Success',
  props<{ data: any }>()
);

export const loadChannelsFailure = createAction(
  '[Channel] Load Channels Failure',
  props<{ error: any }>()
);
