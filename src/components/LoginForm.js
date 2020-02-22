import React, {useState} from 'react';
import {Login} from '../middleWare';
import Message, {TYPES} from "./Message";
import {MESSAGES} from "../constants";
import PropTypes from 'prop-types';
const LoginForm = ( props ) => {
    const userIdInput = React.createRef();
    const [message, setMessage] = useState(null);
    const sigIn = (userId) => {
        let response = Login({"admin-id": userId});

        if (response && response.error) {
            setMessage(response.error);
        } else {
            props.setUserRole(response.userRole);
            setMessage(MESSAGES.INFO.LOG_IN_SUCCESS);
        }
    };

    const ShowMessage = () => {
        return <Message text={message} type={TYPES.ERROR}></Message>
    };

    return (<div>
        <input
            type="text"
            ref={userIdInput}
        />
        <button onClick={() => sigIn('crudadmin'/*userIdInput.current.value*/)}>Log In</button>
        {ShowMessage()}
    </div>);
};
LoginForm.propTypes = {
    setUserRole: PropTypes.func
};
export default LoginForm;