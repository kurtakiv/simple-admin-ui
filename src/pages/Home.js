import React, {useState} from 'react';
import LoginForm from "../components/LoginForm";
import UserSearchView from "../components/UserSearchView";
import {USER_ROLES} from "../constants";
import {UserRoleContext} from "../contexts/UserRoleContext";
const Home = () => {
    let [userRole, setUserRole] = useState(USER_ROLES.GUEST);
    return (
        <React.Fragment>

            <LoginForm setUserRole={(userRole) => {
                setUserRole(userRole)
            }}/>
            {userRole ?
                <UserRoleContext.Provider value={userRole}>
                    <UserSearchView></UserSearchView>
                </UserRoleContext.Provider>
                : <div></div>}
        </React.Fragment>
    )

};

export default Home;

