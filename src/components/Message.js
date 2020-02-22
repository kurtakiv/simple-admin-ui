import React from 'react';
import "./Message.scss";
import PropTypes from 'prop-types';

const TYPES = {
    ERROR: 'error',
    SUCCESS: 'success'
};

function Message(props) {
    return (
        <React.Fragment>
            <div className="message">
                <div className={props.type}>
                    <span>{props.text}</span>
                </div>
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