export interface scrollState {
    scrollY: number
}

export enum ScrollYTypes {
    SCROLL_Y = "SCROLL_Y"
}

interface scrollY {
    type: ScrollYTypes.SCROLL_Y
    payload: number
}

export type ScrollActions = scrollY
