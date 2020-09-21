import { Action } from '@ngrx/store'
import { OpenArDetail } from './../models/open-ar-detail.model';
import * as OpenArDetailActions from './../actions/open-ar-detail.action';

const initailOpenArDetail: OpenArDetail = {
    visible: false
};

export function openActiveRequestDetailReducer(state: OpenArDetail = initailOpenArDetail, action: any) {
    switch (action.type) {
        case OpenArDetailActions.SHOW_ACTIVEREQUESTDETAIL:
            return { visible: true }
        case OpenArDetailActions.HIDE_ACTIVEREQUESTDETAIL:
            return { visible: false }
        default:
            return state;
    }
}
