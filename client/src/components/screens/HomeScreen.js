import React from 'react'
import { useSelector } from 'react-redux'
import { selectChannelName } from '../../features/appSlice'
import ChatMessage from '../ChatMessage'
import Members from '../Members'
import Servers from '../Servers'
import Sidebar from '../Sidebar'
import Topbar from '../Topbar'

function HomeScreen() {
    const channelName = useSelector(selectChannelName)

    return (
        <div class="flex">
            <Servers/>
            <div class="flex-1 flex flex-col min-h-screen h-screen">
                <Topbar channelName={channelName}/>
                <div class="flex-1 flex overflow-y-hidden">
                    <Sidebar/>
                    <div class="flex-1 flex justify-between">
                        <ChatMessage/>
                        <Members/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
