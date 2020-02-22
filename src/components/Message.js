import React, {useState} from 'react';
import styles from "./Message.scss";
import PropTypes from 'prop-types';
const TYPES = {
    ERROR: 'error',
    SUCCESS: 'success'
};
function Message(props) {
    return (
        <React.Fragment>
            <div style={styles[props.type]}>
                <span>{props.text}</span>
            </div>
        </React.Fragment>
    )
};

Message.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string
};

export {TYPES};
export default Message;