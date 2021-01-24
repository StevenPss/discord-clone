import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { selectChannelId, selectChannelName } from '../features/appSlice';
import db from '../firebase';
import firebase from 'firebase';
import 'emoji-mart/css/emoji-mart.css'
import { Picker, emojiIndex } from 'emoji-mart'
import ReactTextareaAutocomplete from "@webscopeio/react-textarea-autocomplete"

function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [isEmojiOpen, setIsEmojiOpen] = useState(false)

    const showEmoji = () => {
      setIsEmojiOpen(!isEmojiOpen)
    }

    const addEmoji = (emoji) => {
      const text = `${input}${emoji.native}`;
      setInput(text)
    }

    const sendMessage = (e) => {
      e.preventDefault();

      db.collection('channels').doc(channelId).collection('messages').add({
          message: input,
          user: user,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      setInput('')
    }

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage(e);
      }
    }


    return (
        <div class="bg-gray-700 h-24 flex items-center mx-3">
            <button class="px-2 py-2 h-10 bg-gray-800 rounded-l text-gray-500 hover:text-white">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="plus-circle"><rect width="24" height="24" opacity="0"></rect><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3 11h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z"></path></g></g></svg>
            </button>

            <div class="flex-1">
              <form action="" method="post">
                <ReactTextareaAutocomplete
                  type="text" 
                  className="my-textarea w-full text-sm h-10 px-2 py-2 bg-gray-800 text-gray-200 focus:outline-none"
                  loadingComponent={() => <span>Loading</span>}
                  disabled={!channelId}
                  value={input}
                  onKeyPress={handleKeyPress}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={`Message #${channelName}`}
                  dropdownStyle={{
                    maxHeight: 400,
                    overflow: "auto",
                 }}
                  trigger={{
                    ':': {
                      dataProvider: token =>
                        emojiIndex.search(token).sort().map(o => ({
                          colons: o.colons,
                          native: o.native,
                        })),
                      component: ({ entity: { native, colons } }) => (
                        <div>{`${colons} ${native}`}</div>
                      ),
                      output: item => `${item.native}`,
                    },
                  }}
                />
                <button type="submit" className="hidden" onClick={sendMessage}>Send Meassge</button>
              </form>
            </div>

            <div class="px-2 py-2 bg-gray-800 rounded-r flex items-center h-10">
              <button class="h-10 bg-gray-800 rounded-l text-gray-500 hover:text-white">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 512 512"><path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm448-288h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40zm-72 320h160c17.7 0 32-14.3 32-32V320H288v160z"></path></svg>
                </button>
                <button class="h-10 bg-gray-800 rounded-l text-gray-500 hover:text-white ml-3">
                  <svg class="w-8 h-8" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><defs><path id="a" d="M24 24H0V0h24v24z"></path></defs><clipPath id="b"><use href="#a" overflow="visible"></use></clipPath><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z" clip-path="url(#b)"></path></svg>
                </button>

                {isEmojiOpen? 
                    <Picker onSelect={addEmoji} style={{ position: 'absolute', bottom: '40px', right: '20px' }} />
                       :
                    null
                }

                <button onClick={showEmoji} class="h-10 bg-gray-800 rounded-l text-gray-500 hover:text-white ml-3">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"></path></svg>
                </button>
            </div>
      </div>
    )
}

export default Chat
