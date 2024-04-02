import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "./Search";
import logo from "../assets/img/logo.jpg"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuOpenIcon from '@mui/icons-material/Menu';

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" >
      <List>
        {['Profile', 'Medicine Store', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
           {text === 'Profile' ? ( // Проверка, чтобы создать Link только для элемента "Profile"
            <ListItemButton component={Link} to="/profile" onClick={toggleDrawer(false)}> 
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            ) :
              text === 'Medicine Store' ? ( // Проверка, чтобы создать Link только для элемента "Profile"
            <ListItemButton component={Link} to="/" onClick={toggleDrawer(false)}> 
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            ):
              (
            <ListItemButton onClick={toggleDrawer(false)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          )}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={toggleDrawer(false)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <div className="header">
      <div className="container">
      <Button onClick={toggleDrawer(true)}><MenuOpenIcon/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)} ModalProps={{ onBackdropClick: toggleDrawer(false) }}>
        {DrawerList}
      </Drawer>
        <Link to="/"><div className="header__logo">
          <img width="52" src={logo} alt="Pizza logo" />
          <div>
            <h1>Medicine Recipe</h1>
            <p>Получи назначение онлайн</p>
          </div>
        </div></Link>
        <Search/>
        <div className="header__cart">
          <Link to="/Cart" className="button button--cart" >
            <span>Cart</span>
            <div className="button__delimiter"></div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/ /svg"
            >
              <path
                d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
