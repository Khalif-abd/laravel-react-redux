let inState = {
    is_auth: false,
    token: null,
};

export function GetAuth(state = inState, action) {
    switch (action.type) {
        case "AUTH":
            return {
                ...state,
                is_auth: true,
                token: action.payload.token,
            };
        case "EXIT":
            return {
                ...state,
                is_auth: false,
                token: null,
            };
        default:
            return state;
    }
}
