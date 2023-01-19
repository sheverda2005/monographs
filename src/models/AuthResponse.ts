import {IUser} from "./userModel";

export interface AuthResponse {
    accessToken: string,
    refreshToken: string,
    userData: IUser
}