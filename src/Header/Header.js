import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';
import FaceIcon from '@material-ui/icons/Face';
import './Header.css';

function Header() {
    return (
      <div className="header">
        <IconButton>
            <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
         
        <IconButton className="header__logo">
            <FaceIcon fontSize="large" className="header__icon" />
        </IconButton>

         <IconButton>
            <ChatIcon fontSize="large" className="header__icon" />
        </IconButton>
      </div>
    );
  }


export default Header;
