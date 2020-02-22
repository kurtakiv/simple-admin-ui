import React from "react";
import {USER_ROLES} from "../constants";

const UserRoleContext = React.createContext(USER_ROLES.GUEST);

export  {UserRoleContext};