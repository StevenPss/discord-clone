import React from 'react'
import DiscordLogo from '../static/icon_discord.svg'
import LaravelLogo from '../static/icon_laravel.svg'
import TailwindLogo from '../static/icon_tailwind.svg'
import ExploreIcon from '@material-ui/icons/Explore';


function Servers() {
  return (
    <div class=" bg-gray-900 w-20 flex-none flex flex-col min-h-screen h-screen px-2 py-2">
      <div class="channel-bar overflow-y-auto">
        <ul class="text-center">
          <li><a href="#"><img src={DiscordLogo} alt="discord" class="w-12 h-12 rounded-full mx-auto"/></a></li>
          <li class="border-b border-gray-700 mx-4 mt-3"></li>
          <li class="mt-3"><a href="#"><img src={LaravelLogo} alt="laravel" class="w-12 h-12 rounded-full mx-auto"/></a></li>
          <li class="mt-3"><a href="#"><img src={TailwindLogo} alt="tailwind" class="w-12 h-12 rounded-full mx-auto"/></a></li>
          <li class="mt-3">
            <a href="#" class="w-12 h-12 bg-gray-800 hover:bg-green-500 text-green-500 hover:text-white inline-block rounded-full">
              <svg fill="currentColor" class="mt-3 mx-auto" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </a>
          </li>
          <li class="mt-2">
            <a href="#" class="w-12 h-12 bg-gray-800 hover:bg-green-500 text-green-500 hover:text-white inline-block rounded-full">
              <ExploreIcon fill="currentColor" class="mt-3 mx-auto" width="24" height="24"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Servers
