import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

function Message({message, user, timestamp}) {

    //customize tooltip
    const useStylesBootstrap = makeStyles((theme) => ({
      arrow: {
        color: theme.palette.common.black,
      },
      tooltip: {
        backgroundColor: theme.palette.common.black,
      },
    }));
    
    //make tooltip reusable with custom props
    function BootstrapTooltip(props) {
      const classes = useStylesBootstrap();
    
      return <Tooltip arrow classes={classes} {...props} />;
    }

    return (
      <div class="flex mx-6 my-3 py-3">
          <div class="flex-none"><a href="#"><img src={user.photo} alt="avatar" class="w-10 h-10 rounded-full"/></a></div>
          <div class="ml-5">
            <div>
              <a href="#" class="text-white hover:underline font-semibold">{user.displayName}</a>
              <BootstrapTooltip className="ml-2" title={moment(timestamp?.toDate()).utcOffset(-4).format("dddd, MMMM Do YYYY, h:mm A")} placement="top">
                <span class="text-xs text-gray-400">{moment(timestamp?.toDate()).utcOffset(-4).format("MMM D, YYYY h:mm A")}</span>
              </BootstrapTooltip>
            </div>
            <div>
              <div class="text-gray-300">{message}</div>
            </div>
          </div>
      </div>    
    )
}

export default Message
