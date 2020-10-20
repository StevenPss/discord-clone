import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'

function Message() {
    return (
        <div className="message">
            <Avatar/>
            <div className="message__info">
                <h4>StevenPss <span className="message__timestamp">This the timestamp</span></h4>
                <p> message here</p>
            </div>
        </div>
    )
}

export default Message
