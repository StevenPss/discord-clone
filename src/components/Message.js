import React from 'react'

function Message({message, user, timestamp}) {
    return (
      <div class="flex mx-6 my-3 py-3">
          <div class="flex-none"><a href="#"><img src={user.photo} alt="avatar" class="w-10 h-10 rounded-full"/></a></div>
          <div class="ml-5">
            <div>
              <a href="#" class="text-white hover:underline font-semibold">{user.displayName}</a>
              <span class="text-xs text-gray-400 ml-1">{new Date(timestamp?.toDate()).toLocaleString()}</span>
            </div>
            <div>
              <div class="text-gray-300">{message}</div>
            </div>
          </div>
      </div>    
    )
}

export default Message
