let inState = {
    error: null,
};

export function Errors(state = inState, action) {
    switch (action.type) {
        case "ERROR":
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
}
