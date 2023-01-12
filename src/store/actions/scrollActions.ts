import {Dispatch} from "redux";
import {ScrollActions, ScrollYTypes} from "../../models/scrollModel";

export function scrollY(scroll: number) {
    return (dispatch: Dispatch<ScrollActions>) => {
        dispatch({type: ScrollYTypes.SCROLL_Y, payload: scroll})
    }
}