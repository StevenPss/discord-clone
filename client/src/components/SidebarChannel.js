import React from 'react'
import { useDispatch } from 'react-redux';
import {setChannelInfo} from "../features/appSlice"

function SidebarChannel({id, channelName}) {
    const dispatch = useDispatch();
    return (
        <li class="text-gray-200 px-2 hover:text-gray-200 hover:bg-gray-900 bg-gray-750 rounded">
            <a href="#"
            onClick={() => (dispatch(setChannelInfo({
                    channelId: id, channelName: channelName
            })))} class="flex items-center">
                <span class="text-xl">#</span>
                <span class="ml-2">{channelName}</span>
            </a>
        </li>
    )
}

export default SidebarChannel
