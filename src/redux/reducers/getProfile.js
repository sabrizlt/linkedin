import { GET_EXPS, GET_PROFILE } from "../actions";

const initialState = {
    profile: null,
    exp: []
}

const findProfile = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload,

            };
        case GET_EXPS:
            return {
                ...state,
                exp: action.payload,

            };

        default: return state
    }
}

export default findProfile
