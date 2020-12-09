import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Members() {
    const user = useSelector(selectUser);

    return (
        <div class="sidebar-users text-sm bg-gray-800 w-56 flex-none px-3 py-3 overflow-y-auto">
            <h3 class="uppercase tracking-wide font-semibold text-xs text-gray-500 mb-2">Core Team — 1</h3>
            <ul class="mb-6 truncate">
              <li class="text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2">
                <a href="#" class="flex items-center">
                  <span class="flex-none"><a href="#"><img src={user.photo} alt="avatar" class="w-8 h-8 rounded-full"/></a></span>
                  <span class="ml-2">{user.displayName}</span>
                </a>
              </li>
            </ul>
            <h3 class="uppercase tracking-wide font-semibold text-xs text-gray-500 mb-2">Online — 2</h3>

            <ul class="mb-6 truncate">
              <li class="text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2">
                <a href="#" class="flex items-center">
                  <span class="flex-none"><a href="#"><img src={user.photo} alt="avatar" class="w-8 h-8 rounded-full"/></a></span>
                  <span class="ml-2">{user.displayName}</span>
                </a>
              </li>
              <li class="text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2">
                <a href="#" class="flex items-center">
                  <span class="flex-none"><a href="#"><img src={user.photo} alt="avatar" class="w-8 h-8 rounded-full"/></a></span>
                  <div class="ml-2">
                    <div>{user.displayName}</div>
                    <div class="text-xs text-gray-600">Playing <span class="font-semibold">Visual Studio Code</span></div>
                  </div>
                </a>
              </li>
            </ul>

            <h3 class="uppercase tracking-wide font-semibold text-xs text-gray-500 mb-2">Offline — 0</h3>
        </div>
    )
}

export default Members
