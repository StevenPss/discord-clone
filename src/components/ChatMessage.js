import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { selectChannelId, selectChannelName } from '../features/appSlice';
import db from '../firebase';
import firebase from 'firebase';
import Message from './Message';
import Chat from './Chat';

function ChatMessage() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [message, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => 
                setMessages(snapshot.docs.map(doc => doc.data()))    
            );
        }
    }, [channelId])

    return (
        <div class="bg-gray-700 flex-1 flex flex-col justify-between">
            <div class="chat text-sm text-gray-400 overflow-y-auto">
                {message.map(message => (
                    <Message 
                        message={message.message}
                        user={message.user}
                        timestamp={message.timestamp}
                    />
                ))}
            </div>
            <Chat/>
        </div>
    )
}

export default ChatMessage
