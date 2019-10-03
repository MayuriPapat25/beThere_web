import React, { Component} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
// import GoogleLogout from 'react-google-login';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const classes=useStyles;


class Header extends Component{
  constructor(props){
    super(props);
    this.state={
        open:false
    }
  }


  handleDrawerOpen = () => {
    this.setState({open:true}) 
  };

  handleDrawerClose = () => {
    this.setState({open:false})
  };

  render(){
    return(
      <div>
        <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: this.state.open,
            })}
            style={{backgroundColor:"#be2622"}}
          >
            <Toolbar className="logo">
              {/* <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, this.state.open && classes.hide)}
              >
                <MenuIcon />
              </IconButton> */}
                
                {/* <img src={require('../../assets/qed_logo.png')} alt="logo" /> */}


                {/* <GoogleLogout
                	clientId="785790539959-ea8fvttmkdin1kg307dlmg4pr1ekdmqg.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={this.logout}
                >
                </GoogleLogout> */}
             <h3>QED42</h3>
            </Toolbar>
          </AppBar>
          {/* <Drawer
            className={classes.drawer}
            anchor="left"
            open={this.state.open}
            onClose={this.handleDrawerClose}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <List>
              {['All Attendances','My Attendance'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer> */}
          {/* <main
            className={clsx(classes.content, {
              [classes.contentShift]: this.state.open,
            })}
          >
          </main> */}
        </div>
        )
    }
}

export default Header;
