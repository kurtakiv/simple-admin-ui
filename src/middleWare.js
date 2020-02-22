import {USER_ROLES, MESSAGES} from "./constants";
const Login = (data) => {
    if (data && data["admin-id"]) {
        switch (data["admin-id"]) {
            case USER_ROLES.CRUD_ADMIN:
                return {userRole: USER_ROLES.CRUD_ADMIN};
            case USER_ROLES.READONLY_ADMIN:
                return {userRole: USER_ROLES.READONLY_ADMIN};
            default:
                return {
                    error: MESSAGES.ERRORS.BAD_USER_ID
                };
        }
    } else {
        return {
            error: MESSAGES.ERRORS.BAD_USER_ID
        }
    }
};

async function GET  ( url, options = {} )  {
    const response = await fetch( url, options);
    if (response.ok) {
        let data = await response.json();
        return {
            data
        }
    } else {
        return  {
            error: response.status
        }
    }
}

export {Login, GET};