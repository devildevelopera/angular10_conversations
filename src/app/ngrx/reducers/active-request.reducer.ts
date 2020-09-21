import { Action } from '@ngrx/store'
import { ActiveRequest } from './../models/active-request.model'
import * as ActiveRequestActions from './../actions/active-request.actions'

const initialState: ActiveRequest[] = [
    // {
    //     user_id: 1,
    //     first_name:"Test",
    //     last_name:"test",
    //     email:"test@test.com",
    //     phone:"8135637145",
    //     type:'voice',
    //     status: "incoming",
    //     is_active:false,
    //     new_message: true,
    //     is_deferred:false,  
    //   }
];

export function activeRequestReducer(state: ActiveRequest[] = initialState, action: any) {
    switch (action.type) {
        case ActiveRequestActions.ADD_ACTIVEREQUEST:
            return [...state, action.payload];
        case ActiveRequestActions.CLEAR_ACTIVEREQUESTS:
            return state = [];

        default:
            return state;
    }
}