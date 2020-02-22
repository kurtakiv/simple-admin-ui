const MESSAGES = {
  ERRORS: {
      BAD_USER_ID: "Bad user id, failed to login",
      FAILED_TO_GET_USERS: "Failed to get users",
      NOT_AUTHORIZED: "User is not authorized"
  },
  INFO: {
      LOG_IN_SUCCESS: "Login success",
      NO_USER_FIND: 'NO user find'
  }
};
const USER_ROLES = {
    CRUD_ADMIN: 'crudadmin',
    READONLY_ADMIN: 'READONLY_ADMIN',
    GUEST: ""
};

const API = {
    GET: {
        USERS: "http://www.mocky.io/v2/5d7f3d17330000204ef0b027?mocky-delay=500ms"
    }
};


export {USER_ROLES, MESSAGES, API};
