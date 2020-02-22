import React from 'react';
import LoginForm from "../components/LoginForm";
import { useHistory } from "react-router-dom";
const LoginPage = (props) => {
    let history = useHistory();

    const onLogIn =() => {
        history.push("/view");
    };

    return (<LoginForm {...props} onLogIn = {()=>onLogIn()} />)
};

export default LoginPage;

