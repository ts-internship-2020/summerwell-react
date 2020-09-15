import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import EventNoteIcon from '@material-ui/icons/EventNote';

const menuItems = [
    { icon: <HomeIcon />, text: 'NavBar.Welcome', path: '/welcome', name: 'Welcome'},
    { icon: <EventIcon/>, text: 'NavBar.Conferences', path: '/conferences', name: 'Conferences'},
    { icon: <EventNoteIcon/>, text: 'NavBar.MyConferences', path: '/myConferences', name:'MyConferences'}
]

export default menuItems