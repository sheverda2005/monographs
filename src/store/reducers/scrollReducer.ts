import {ScrollActions, scrollState, ScrollYTypes} from "../../models/scrollModel";

const initialState: scrollState = {
    scrollY: 0
}

export const scrollReducer = (state = initialState, action: ScrollActions): scrollState => {
    switch (action.type) {
        case ScrollYTypes.SCROLL_Y:
            return {...state, scrollY: action.payload}
        default:
            return state
    }
}