import React from 'react'
import InboxIcon from '@material-ui/icons/Inbox';

function Topbar({channelName}) {
    return (
        <div class="flex text-white h-12">
            <div class="bg-gray-800 w-56 flex-none flex items-center justify-between border-b border-gray-900 px-3 py-2">
                <div>Programmer's Hideout</div>
                <button>
                    <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
                </button>
            </div>

            <div class="flex-1 bg-gray-700 flex items-center justify-between border-b border-gray-900 px-4">
                <div class="flex items-center">
                    <div class="text-gray-500 text-2xl">#</div>
                    <div class="ml-2 text-sm text-white">{channelName}</div>
                    <div class="border-l pl-3 ml-3 border-gray-600 text-xs text-gray-400">general discussion of {channelName}</div>
                </div>
                <div class="flex items-center">
                    <a href="#" class="ml-4">
                        <svg class="w-6 h-6 text-gray-500 hover:text-gray-200" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></svg>
                    </a>
                    <a href="#" class="ml-4">
                        <svg class="w-6 h-6 text-gray-500 hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24"><path class="secondary" d="M2.24 20.35l6.5-7.5a1 1 0 0 1 1.47-.06l1 1a1 1 0 0 1-.06 1.47l-7.5 6.5c-.93.8-2.22-.48-1.4-1.41z"></path><path class="primary" d="M15 15.41V18a1 1 0 0 1-.3.7l-1 1a1 1 0 0 1-1.4 0l-8-8a1 1 0 0 1 0-1.4l1-1A1 1 0 0 1 6 9h2.59L13 4.59V3a1 1 0 0 1 1.7-.7l7 7A1 1 0 0 1 21 11h-1.59L15 15.41z"></path></svg>
                    </a>
                    <a href="#" class="ml-4">
                        <svg class="w-6 h-6 text-gray-500 hover:text-gray-200" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>
                    </a>
                    <a href="#" class="ml-4">
                        <form action="#" class="relative">
                            <input type="text" placeholder="Search" class="rounded bg-gray-900 text-gray-200 text-xs px-2 py-1"/>
                            <span class="absolute right-0 top-1 mr-1">
                            <svg class="w-4 h-4 text-gray-500 hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
                            </span>
                        </form>
                    </a>
                    <a href="#" class="ml-4">
                        <InboxIcon class="w-6 h-6 text-gray-500 hover:text-gray-200" fill="currentColor"/>
                    </a>
                    <a href="#" class="ml-4">
                        <svg class="w-6 h-6 text-gray-500 hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="menu-arrow-circle"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-5.16V14a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.5-1.5 1 1 0 0 1-2 0 3.5 3.5 0 1 1 4.5 3.34z"></path></g></g></svg>
                    </a>
                </div>
            </div>
      </div>
    )
}

export default Topbar
