import React, { useEffect, useState } from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectChannelId, selectChannelName } from './features/appSlice';
import db from './firebase';
import firebase from 'firebase';

function Chat() {
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

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection('channels').doc(channelId).collection('messages').add({
            message: input,
            user: user,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput('')
    }

    return (
        <div className="chat"> 
            <ChatHeader channelName={channelName}/>

            <div className="chat__messages">
                {message.map(message => (
                    <Message 
                        message={message.message}
                        user={message.user}
                        timestamp={message.timestamp}
                    />
                ))}
            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input disabled={!channelId} value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message #${channelName}`}/>
                    <button type="submit" onClick={sendMessage} className="chat_inputButon">Send Meassge</button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize="large"/>
                    <GifIcon fontSize="large"/>
                    <EmojiEmotionsIcon fontSize="large"/>
                </div>
            </div>
        </div>
    )
}

export default Chat
