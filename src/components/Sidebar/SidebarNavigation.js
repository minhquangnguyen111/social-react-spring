import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';


export const navigationMenu = [
    
    {
        title: "Home",
        icon: <HomeIcon />,
        path: "/"
    },
    {
        title: "Reels",
        icon: <MovieIcon />,
        path: "/reels"
    },
    {
        title: "Create Reels",
        icon: <ControlPointIcon />,
        path: "/create-reels"
    },
    {
        title: "Notifications",
        icon: <NotificationsIcon />,
        path: "/notifications"
    },
    {
        title: "Message",
        icon: <MessageIcon />,
        path: "/message"
    },
    {
        title: "Lists",
        icon: <ListAltIcon />,
        path: "/"
    },
    {
        title: "Communities",
        icon: <GroupIcon />,
        path: "/"
    },
    {
        title: "Profile",
        icon: <AccountCircleIcon />,
        path: "/profile"
    },
]
