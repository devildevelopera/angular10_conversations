import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { ActiveRequest } from './../models/active-request.model'

// define the const
export const ADD_ACTIVEREQUEST = '[ActiveRequest] Add'
export const CLEAR_ACTIVEREQUESTS = '[ActiveRequest] CLEAR'

export class AddActiveRequest implements Action {
    readonly type = ADD_ACTIVEREQUEST
    constructor(public payload: ActiveRequest) {}
}

export class ClearActiveRequests implements Action {
    readonly type = CLEAR_ACTIVEREQUESTS
    constructor() {}
}

export type Actions = AddActiveRequest
