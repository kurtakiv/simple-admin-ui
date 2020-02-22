import React, {useState} from 'react';
import './App.scss';
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {UserRoleContext} from "./contexts/UserRoleContext";
import {USER_ROLES} from "./constants";
import LoginPage from "./pages/LoginPage";

function App() {

    let [userRole, setUserRole] = useState(USER_ROLES.GUEST);
    return (
        <UserRoleContext.Provider value={userRole}>
            <Router>

                <Switch>
                    <Route exact path="/" component={() => <LoginPage setUserRole={(r) => setUserRole(r)}/>}/>
                    <Route path="/view" component={Home}/>
                </Switch>
            </Router>
        </UserRoleContext.Provider>
    )
}

export default App;
