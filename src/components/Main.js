import * as React from 'react';
import { Link, useLocation, Outlet  } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import HeaderNav from './layouts/HeaderNav';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import SideNav from './layouts/SideNav';
import { makeStyles } from "@mui/styles";


const drawerWidth = 240;


const useStyle = makeStyles((theme) => ({
  offset: theme.mixins.toolbar
}));
 

export default function Main(props) {
  const classes = useStyle()

  const location = useLocation();
  const path = location.pathname;


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menu1 = [
       { title:'Home', path: '/react-tutorial-website/'}, 
       { title:'About', path: '/react-tutorial-website/about'}
      ]

  const menu2 = [
     { title:'Contact', path: '/react-tutorial-website/contact' }
    ]

  const drawer = (
    <div>
      <Toolbar />
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={Link}
          src="./img/dexter.png"
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/"
        />
        <Typography
          color="primary"
          variant="h5"
        >
         Ricardo Arbois
        </Typography>
        <Typography
          color="secondary"
          variant="body2"
        >
          Full Stack Developer
        </Typography>
      </Box>
      <Divider />
      <List>
        {menu1.map((item, index) => (
          <ListItem 
            key={item.title} 
            disablePadding
            component = {Link}
            to = { item.path }    
            button
            selected = { item.path === path }   
            onClick= {handleDrawerToggle}   
            >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon color="secondary"/> : <MailIcon color="secondary" />}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {menu2.map((item, index) => (
          <ListItem 
          key={item.title} 
          disablePadding
          component = {Link}
          to = { item.path }    
          button
          selected = { item.path === path }    
          onClick= {handleDrawerToggle}        
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon color="secondary" /> : <MailIcon color="secondary" />}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <HeaderNav handleDrawerToggle={handleDrawerToggle}/>
      </AppBar>
      <div className={classes.offset}></div>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
       <SideNav  
          container={container} 
          mobileOpen={mobileOpen} 
          handleDrawerToggle={handleDrawerToggle} 
          drawerWidth = {drawerWidth}
          drawer={drawer}
          />

      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />  
        <Outlet/> 
      </Box>
    </Box>
  );
}
