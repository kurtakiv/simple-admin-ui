import React from 'react';
import LoginForm from "../components/LoginForm";
import {useHistory} from "react-router-dom";
import "./LoginPage.scss";

const LoginPage = (props) => {
    let history = useHistory();

    const onLogIn = () => {
        history.push("/view");
    };

    return (<div className="login-page">
        <LoginForm {...props} onLogIn={() => onLogIn()}/>
    </div>)
};

export default LoginPage;

