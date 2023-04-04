const initialState = {
    login: false,
}


export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "OPEN_LOGIN":
            return {
                ...state,
                login: true
            }

        case "CLOSE_LOGIN":
            return {
                login: false
            }
        default: return state
    }
}