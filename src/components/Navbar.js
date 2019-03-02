import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link,withRouter } from 'react-router-dom';
const drawerWidth = 240;

const styles = theme => ({
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
    marginLeft: 12,
    marginRight: 20,
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
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
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
});

class Navbar extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    const { location:{pathname} } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Persistent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['home','history','launches','rockets'].map((text, index) => {
              let location = `/${text}`;
              if(text === 'home'){
                location = '/'
              }
            return  <ListItem button key={text}
              component={Link}
                        to={location}
                        selected={location === pathname}
              >
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            })}
          </List>
          
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
         
        </main>
      </div>
    );
  }
}

// PersistentDrawerLeft.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired,
// };

export default withRouter(withStyles(styles, { withTheme: true })(Navbar))
// import React from 'react';
// import { Link,withRouter } from 'react-router-dom';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Tooltip from '@material-ui/core/Tooltip';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import { fade } from '@material-ui/core/styles/colorManipulator';
// import { withStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';

// const styles = theme => ({
//   root: {
//     width: '100%'
//   },
//   grow: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20
//   },
//   title: {
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block'
//     }
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25)
//     },
//     marginRight: theme.spacing.unit * 2,
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing.unit * 3,
//       width: 'auto'
//     }
//   },
//   searchIcon: {
//     width: theme.spacing.unit * 9,
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   inputRoot: {
//     color: 'inherit',
//     width: '100%'
//   },
//   inputInput: {
//     paddingTop: theme.spacing.unit,
//     paddingRight: theme.spacing.unit,
//     paddingBottom: theme.spacing.unit,
//     paddingLeft: theme.spacing.unit * 10,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: 200
//     }
//   },
//   sectionDesktop: {
//     display: 'none',
//     [theme.breakpoints.up('md')]: {
//       display: 'flex'
//     }
//   },
//   sectionMobile: {
//     display: 'flex',
//     [theme.breakpoints.up('md')]: {
//       display: 'none'
//     }
//   }
// });

// class PrimarySearchAppBar extends React.Component {
//   state = {
//     anchorEl: null,
//     mobileMoreAnchorEl: null
//   };

//   handleProfileMenuOpen = event => {
//     this.setState({ anchorEl: event.currentTarget });
//   };

//   handleMenuClose = () => {
//     this.setState({ anchorEl: null });
//     this.handleMobileMenuClose();
//   };

//   handleMobileMenuOpen = event => {
//     this.setState({ mobileMoreAnchorEl: event.currentTarget });
//   };

//   handleMobileMenuClose = () => {
//     this.setState({ mobileMoreAnchorEl: null });
//   };

//   render() {
//     const { anchorEl, mobileMoreAnchorEl } = this.state;
//     const { classes,location:{pathname} } = this.props;
//     const isMenuOpen = Boolean(anchorEl);
//     const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    
//     const renderMenu = (
//       <Menu
//         anchorEl={anchorEl}
//         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//         open={isMenuOpen}
//         onClose={this.handleMenuClose}
//       >
//         <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
//         <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
//       </Menu>
//     );

//     const renderMobileMenu = (
//       <Menu
//         anchorEl={mobileMoreAnchorEl}
//         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//         open={isMobileMenuOpen}
//         onClose={this.handleMenuClose}
//       >
//         <MenuItem
//           onClick={this.handleMobileMenuClose}
//           component={Link}
//           to="/missions"
//           selected={'/missions' === pathname}
//         >
//           <Button>Missions</Button>
        
//         </MenuItem>
//         <MenuItem
//           onClick={this.handleMobileMenuClose}
//           component={Link}
//           to="/rockets"
//           selected={'/rockets' === pathname}
//         >
//           <Button>Rockets</Button>
        
//         </MenuItem>

//         <MenuItem
//           onClick={this.handleMobileMenuClose}
//           component={Link}
//           to="/launches"
//           selected={'/launches' === pathname}
//         >
//            <Button>Launches</Button>
//         </MenuItem>

//         <MenuItem
//           onClick={this.handleMobileMenuClose}
//           component={Link}
//           to="/history"
//           selected={'/history' === pathname}
//         >
//            <Button>History</Button>
//         </MenuItem>

//         <MenuItem
//           onClick={this.handleMobileMenuClose}
//           component={Link}
//           to="/"
//           selected={'/' === pathname}
//         >
//           <Button color="inherit">
//             Home
//           </Button>
          
//         </MenuItem>
        
//       </Menu>
//     );

//     return (
//       <div className={classes.root}>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton
//               className={classes.menuButton}
//               color="inherit"
//               aria-label="Open drawer"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography
//               className={classes.title}
//               variant="h6"
//               color="inherit"
//               noWrap
//             >
//               SpaceX
//             </Typography>

//             <div className={classes.grow} />
//             <div className={classes.sectionDesktop}>
            
//             <Button component={Link}
//           to="/missions"
//           color="inherit">Missions</Button>
//             <Button component={Link}
           
            
//           to="/launches"
//          color="inherit">Launches</Button>
//           <Button component={Link}
//           to="/rockets"
//           color="inherit">Rockets</Button>
//           <Button component={Link}
//           to="/history"
//           color="inherit">History</Button>
//             <Button component={Link}
//           to="/"
//           color="inherit">Home</Button>
//             </div>
//             <div className={classes.sectionMobile}>
//               <IconButton
//                 aria-haspopup="true"
//                 onClick={this.handleMobileMenuOpen}
//                 color="inherit"
//               >
//                 <MoreIcon />
//               </IconButton>
//             </div>
//           </Toolbar>
//         </AppBar>
//         {renderMenu}
//         {renderMobileMenu}
//       </div>
//     );
//   }
// }

// export default withRouter(withStyles(styles)(PrimarySearchAppBar))
