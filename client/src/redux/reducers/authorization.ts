import { AT_USER } from '../actionTypes';

export type StateAuthorization = {
    isAuthenticated: boolean;
    user: {};
    auth?: any;
};

export type ActionAuthorization = {
    type: AT_USER;
    payload: {};
};

const initialState: StateAuthorization = {
    isAuthenticated: false,
    user: {},
};

export const authorization = (
    state: StateAuthorization = initialState,
    action: ActionAuthorization
): StateAuthorization => {
    switch (action.type) {
        case AT_USER.SET_CURRENT:
            return {
                ...state,
                isAuthenticated: Object.keys(action.payload).length !== 0,
                user: action.payload
            };
        default:
            return state;
    }
};
