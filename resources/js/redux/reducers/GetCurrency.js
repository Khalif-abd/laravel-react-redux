const inState = {
    loading: false,
    data: [],
};

export function GetCurrency(state = inState, action) {
    switch (action.type) {
        case "LOAD_CURRENCY":
            return {
                ...state,
                loading: true,
            };

        case "GET_CURRENCY":
            return {
                ...state,
                data: action.payload.data,
                loading: false,
            };
        case "DEL_CURRENCY":
            return {
                ...state,
                data: [],
                loading: false,
            };
        default:
            return state;
    }
}
