import * as MenuActions from "./menuActions"
import * as ScrollActions from "./scrollActions"
import * as RegisterActions from "./userRegisterAction"
import * as CheckUser from "./checkUserAction"
import * as LogOut from "./LogoutAction"
import * as Login from "./loginActions"
export default {
    ...MenuActions,
    ...ScrollActions,
    ...RegisterActions,
    ...CheckUser,
    ...LogOut,
    ...Login
}