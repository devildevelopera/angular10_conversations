import { createAction, props } from '@ngrx/store';

export const loadActiveRequests = createAction(
  '[ActiveRequest] Load ActiveRequests'
);

export const loadActiveRequestsSuccess = createAction(
  '[ActiveRequest] Load ActiveRequests Success',
  props<{ data: any }>()
);

export const loadActiveRequestsFailure = createAction(
  '[ActiveRequest] Load ActiveRequests Failure',
  props<{ error: any }>()
);
