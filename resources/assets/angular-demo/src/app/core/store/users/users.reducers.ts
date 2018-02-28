import * as UsersActions from  './users.actions';

export interface UserState {
    info: any,
    users: any,
}

const initialState: UserState = {
    info: null,
    users: [{
            first_name :'AAA'
        },
        {
            first_name :'BBB'
        }],
}


export function usersReducer (state = initialState, action: UsersActions.UsersActions) {

    switch (action.type) {
        case UsersActions.GET_USERS_SUCCESS:
            return {
                ...state,
                users :  action.payload
            };
        default:
            return state;
    }
}