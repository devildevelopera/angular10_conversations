import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Channel } from './../models/channel.model'

// define the const
export const UPDATE_CHANNEL = '[Channel] Update'

export class UpdateChannel implements Action {
    readonly type = UPDATE_CHANNEL
    constructor(public payload: Channel) {}
}

export type Actions = UpdateChannel
