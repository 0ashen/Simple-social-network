import { AT_USER } from '../actionTypes';

export type InitialState = {
    isAuthenticated: boolean;
    user: {};
};

export type Action = {
    type: AT_USER;
    payload: {};
};

const initialState: InitialState = {
    isAuthenticated: false,
    user: {}
};

export const auth = (
    state: InitialState = initialState,
    action: Action
): InitialState => {
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
