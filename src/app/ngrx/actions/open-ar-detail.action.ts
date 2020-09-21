import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { OpenArDetail } from './../models/open-ar-detail.model'

// define the const
export const SHOW_ACTIVEREQUESTDETAIL = '[BOOL] SHOW'
export const HIDE_ACTIVEREQUESTDETAIL = '[BOOL] HIDE'

export class OpenActiveRequestDetail implements Action {
    readonly type = SHOW_ACTIVEREQUESTDETAIL
    constructor() {}
}

export class HideActiveRequestDetail implements Action {
    readonly type = HIDE_ACTIVEREQUESTDETAIL
    constructor() {}
}
