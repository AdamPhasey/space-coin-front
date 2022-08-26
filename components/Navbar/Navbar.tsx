// import { Button } from "@mui/material";
// import Link from "next/link";
// import FadeMenu from "../BurgerMenu/BurgerMenu";
// import Profile from "../Profile";
// import anime from "animejs";
// import { useEffect } from "react";

// export default function Navbar(): JSX.Element {

//   useEffect(() => {
//     anime({
//       targets: "#spacecoin path",
//       strokeDashoffset: [anime.setDashoffset, 0],
//       easing: "easeInOutSine",
//       duration: 1500,
//       delay: function (el, i) {
//         return i * 100;
//       },
//       direction: "alternate",
//       loop: false,
//     });
//   });
//   return (
//     <>
//       <div className="flex flex-col items-center">
      // <svg    className="pt-5"
      //         width={"20vmax"}
      //         id="spacecoin"
      //         data-name="Layer 1"
      //         xmlns="http://www.w3.org/2000/svg"
      //         viewBox="0 0 191.83 21"
      //       >
      //         <defs>
      //           <style>
      //             .cls-1
      //             {
      //               "{fill:none;stroke:#006837;stroke-miterlimit:10;stroke-width:0.75px;{"
      //             }
      //           </style>
      //         </defs>
      //         <path
      //           className="cls-1"
      //           d="M155.13,71V73.5a1.8,1.8,0,0,0,.49,1.28,1.56,1.56,0,0,0,1.19.52h11.74a3.42,3.42,0,0,1,2.59,1.16,3.91,3.91,0,0,1,1.08,2.77v3.42a3.87,3.87,0,0,1-1.08,2.76,3.44,3.44,0,0,1-2.59,1.14H156.36a3.38,3.38,0,0,1-2.57-1.14,3.89,3.89,0,0,1-1.06-2.76v-.3h2.4a1.9,1.9,0,0,0,.56,1.16,1.55,1.55,0,0,0,1.12.46H168.1a1.62,1.62,0,0,0,1.21-.52,1.81,1.81,0,0,0,.5-1.28V79.71a1.85,1.85,0,0,0-.5-1.29,1.6,1.6,0,0,0-1.21-.54H156.36a3.36,3.36,0,0,1-2.57-1.15A4,4,0,0,1,152.73,74V70.56a3.93,3.93,0,0,1,1.06-2.77,3.37,3.37,0,0,1,2.57-1.16h12.19a3.42,3.42,0,0,1,2.59,1.16,3.91,3.91,0,0,1,1.08,2.77v.27h-2.44a1.7,1.7,0,0,0-.53-1.15,1.59,1.59,0,0,0-1.15-.47H156.81a1.55,1.55,0,0,0-1.19.54A1.84,1.84,0,0,0,155.13,71Z"
      //           transform="translate(-152.35 -65.93)"
      //         />
      //         <path
      //           className="cls-1"
      //           d="M192,66.3a3.42,3.42,0,0,1,2.58,1.14,3.87,3.87,0,0,1,1.08,2.76v6A3.93,3.93,0,0,1,194.54,79,3.39,3.39,0,0,1,192,80.13H179.29v6.42h-2.4V66.3Zm1.26,9.42v-5a1.81,1.81,0,0,0-.51-1.29,1.57,1.57,0,0,0-1.2-.54H179.29v8.7h12.22a1.57,1.57,0,0,0,1.2-.54A1.81,1.81,0,0,0,193.22,75.72Z"
      //           transform="translate(-152.35 -65.93)"
      //         />
      //         <path
      //           className="cls-1"
      //           d="M212.23,66.3,221,86.55h-2.77l-1.84-4.23H203.7l-1.84,4.23h-2.77L207.9,66.3ZM204.71,80h10.71l-5.37-12.27Z"
      //           transform="translate(-152.35 -65.93)"
      //         />
      //         <path
      //           className="cls-1"
      //           d="M228.59,68.85a1.55,1.55,0,0,0-1.19.54,1.88,1.88,0,0,0-.49,1.29V82.17a1.84,1.84,0,0,0,.49,1.28,1.56,1.56,0,0,0,1.19.52h11a1.56,1.56,0,0,0,1.19-.52,2,2,0,0,0,.52-1.28h2.4v.48a3.9,3.9,0,0,1-1.07,2.76A3.44,3.44,0,0,1,240,86.55H228.14a3.4,3.4,0,0,1-2.57-1.14,3.89,3.89,0,0,1-1.06-2.76V70.2a3.89,3.89,0,0,1,1.06-2.76,3.4,3.4,0,0,1,2.57-1.14H240a3.44,3.44,0,0,1,2.59,1.14,3.9,3.9,0,0,1,1.07,2.76v.45h-2.4a1.94,1.94,0,0,0-.52-1.27,1.57,1.57,0,0,0-1.19-.53Z"
      //           transform="translate(-152.35 -65.93)"
      //         />
      //         <path
      //           className="cls-1"
      //           d="M265.14,68.55H250.82v6.57h11.91v2.61H250.82V84.3h14.32v2.25H248.36V66.3h16.78Z"
      //           transform="translate(-152.35 -65.93)"
      //         />
      //         <path
      //           className="cls-1"
      //           d="M273.89,68.85a1.56,1.56,0,0,0-1.19.54,1.88,1.88,0,0,0-.49,1.29V82.17a1.84,1.84,0,0,0,.49,1.28,1.58,1.58,0,0,0,1.19.52h11a1.56,1.56,0,0,0,1.19-.52,1.92,1.92,0,0,0,.52-1.28H289v.48a3.9,3.9,0,0,1-1.07,2.76,3.44,3.44,0,0,1-2.59,1.14H273.44a3.4,3.4,0,0,1-2.57-1.14,3.89,3.89,0,0,1-1.06-2.76V70.2a3.89,3.89,0,0,1,1.06-2.76,3.4,3.4,0,0,1,2.57-1.14h11.89a3.44,3.44,0,0,1,2.59,1.14A3.9,3.9,0,0,1,289,70.2v.45h-2.4a1.89,1.89,0,0,0-.52-1.27,1.57,1.57,0,0,0-1.19-.53Z"
      //           transform="translate(-152.35 -65.93)"
      //         />
      //         <path
      //           className="cls-1"
      //           d="M309.49,66.3a3.44,3.44,0,0,1,2.59,1.14,3.9,3.9,0,0,1,1.07,2.76V82.65a3.9,3.9,0,0,1-1.07,2.76,3.44,3.44,0,0,1-2.59,1.14H297.3a3.4,3.4,0,0,1-2.58-1.14,3.94,3.94,0,0,1-1.06-2.76V70.2a3.94,3.94,0,0,1,1.06-2.76,3.4,3.4,0,0,1,2.58-1.14Zm1.26,15.87V70.68a1.85,1.85,0,0,0-.5-1.29,1.6,1.6,0,0,0-1.21-.54H297.75a1.53,1.53,0,0,0-1.19.54,1.84,1.84,0,0,0-.49,1.29V82.17a1.8,1.8,0,0,0,.49,1.28,1.55,1.55,0,0,0,1.19.52H309a1.62,1.62,0,0,0,1.21-.52A1.81,1.81,0,0,0,310.75,82.17Z"
      //           transform="translate(-152.35 -65.93)"
      //         />
      //         <path
      //           className="cls-1"
      //           d="M320.23,86.55h-2.41V66.3h2.41Z"
      //           transform="translate(-152.35 -65.93)"
      //         />
      //         <path
      //           className="cls-1"
      //           d="M341.4,66.3h2.4V86.55h-4.05L327.33,68V86.55h-2.4V66.3h4.36l12.11,18Z"
      //           transform="translate(-152.35 -65.93)"
      //         />
      //       </svg>
//         <br />
//         <div>
//           <FadeMenu />
//         </div>
//       </div>
//     </>
//   );
// }


import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
  useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const [anchorEl1, setAnchorEl1] = useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl1);
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl1(null);
  };
  const menuId2 = 'primary-search-burger-menu';


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
        id="demo-positioned-button"
        aria-controls={open1 ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open1 ? 'true' : undefined}
        onClick={handleClick2}
      >
        <MenuIcon  className='text-white'/>
      </IconButton>
      <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      id={menuId2}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={open1}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Home</MenuItem>
      <MenuItem onClick={handleClose}>Help</MenuItem>
    </Menu>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
     <svg    className="pt-0"
              width={"15vmax"}
              id="spacecoin"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 191.83 21"
            >
              <defs>
                <style>
                  .cls-1
                  {
                    "{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.75px;{"
                  }
                </style>
              </defs>
              <path
                className="cls-1"
                d="M155.13,71V73.5a1.8,1.8,0,0,0,.49,1.28,1.56,1.56,0,0,0,1.19.52h11.74a3.42,3.42,0,0,1,2.59,1.16,3.91,3.91,0,0,1,1.08,2.77v3.42a3.87,3.87,0,0,1-1.08,2.76,3.44,3.44,0,0,1-2.59,1.14H156.36a3.38,3.38,0,0,1-2.57-1.14,3.89,3.89,0,0,1-1.06-2.76v-.3h2.4a1.9,1.9,0,0,0,.56,1.16,1.55,1.55,0,0,0,1.12.46H168.1a1.62,1.62,0,0,0,1.21-.52,1.81,1.81,0,0,0,.5-1.28V79.71a1.85,1.85,0,0,0-.5-1.29,1.6,1.6,0,0,0-1.21-.54H156.36a3.36,3.36,0,0,1-2.57-1.15A4,4,0,0,1,152.73,74V70.56a3.93,3.93,0,0,1,1.06-2.77,3.37,3.37,0,0,1,2.57-1.16h12.19a3.42,3.42,0,0,1,2.59,1.16,3.91,3.91,0,0,1,1.08,2.77v.27h-2.44a1.7,1.7,0,0,0-.53-1.15,1.59,1.59,0,0,0-1.15-.47H156.81a1.55,1.55,0,0,0-1.19.54A1.84,1.84,0,0,0,155.13,71Z"
                transform="translate(-152.35 -65.93)"
              />
              <path
                className="cls-1"
                d="M192,66.3a3.42,3.42,0,0,1,2.58,1.14,3.87,3.87,0,0,1,1.08,2.76v6A3.93,3.93,0,0,1,194.54,79,3.39,3.39,0,0,1,192,80.13H179.29v6.42h-2.4V66.3Zm1.26,9.42v-5a1.81,1.81,0,0,0-.51-1.29,1.57,1.57,0,0,0-1.2-.54H179.29v8.7h12.22a1.57,1.57,0,0,0,1.2-.54A1.81,1.81,0,0,0,193.22,75.72Z"
                transform="translate(-152.35 -65.93)"
              />
              <path
                className="cls-1"
                d="M212.23,66.3,221,86.55h-2.77l-1.84-4.23H203.7l-1.84,4.23h-2.77L207.9,66.3ZM204.71,80h10.71l-5.37-12.27Z"
                transform="translate(-152.35 -65.93)"
              />
              <path
                className="cls-1"
                d="M228.59,68.85a1.55,1.55,0,0,0-1.19.54,1.88,1.88,0,0,0-.49,1.29V82.17a1.84,1.84,0,0,0,.49,1.28,1.56,1.56,0,0,0,1.19.52h11a1.56,1.56,0,0,0,1.19-.52,2,2,0,0,0,.52-1.28h2.4v.48a3.9,3.9,0,0,1-1.07,2.76A3.44,3.44,0,0,1,240,86.55H228.14a3.4,3.4,0,0,1-2.57-1.14,3.89,3.89,0,0,1-1.06-2.76V70.2a3.89,3.89,0,0,1,1.06-2.76,3.4,3.4,0,0,1,2.57-1.14H240a3.44,3.44,0,0,1,2.59,1.14,3.9,3.9,0,0,1,1.07,2.76v.45h-2.4a1.94,1.94,0,0,0-.52-1.27,1.57,1.57,0,0,0-1.19-.53Z"
                transform="translate(-152.35 -65.93)"
              />
              <path
                className="cls-1"
                d="M265.14,68.55H250.82v6.57h11.91v2.61H250.82V84.3h14.32v2.25H248.36V66.3h16.78Z"
                transform="translate(-152.35 -65.93)"
              />
              <path
                className="cls-1"
                d="M273.89,68.85a1.56,1.56,0,0,0-1.19.54,1.88,1.88,0,0,0-.49,1.29V82.17a1.84,1.84,0,0,0,.49,1.28,1.58,1.58,0,0,0,1.19.52h11a1.56,1.56,0,0,0,1.19-.52,1.92,1.92,0,0,0,.52-1.28H289v.48a3.9,3.9,0,0,1-1.07,2.76,3.44,3.44,0,0,1-2.59,1.14H273.44a3.4,3.4,0,0,1-2.57-1.14,3.89,3.89,0,0,1-1.06-2.76V70.2a3.89,3.89,0,0,1,1.06-2.76,3.4,3.4,0,0,1,2.57-1.14h11.89a3.44,3.44,0,0,1,2.59,1.14A3.9,3.9,0,0,1,289,70.2v.45h-2.4a1.89,1.89,0,0,0-.52-1.27,1.57,1.57,0,0,0-1.19-.53Z"
                transform="translate(-152.35 -65.93)"
              />
              <path
                className="cls-1"
                d="M309.49,66.3a3.44,3.44,0,0,1,2.59,1.14,3.9,3.9,0,0,1,1.07,2.76V82.65a3.9,3.9,0,0,1-1.07,2.76,3.44,3.44,0,0,1-2.59,1.14H297.3a3.4,3.4,0,0,1-2.58-1.14,3.94,3.94,0,0,1-1.06-2.76V70.2a3.94,3.94,0,0,1,1.06-2.76,3.4,3.4,0,0,1,2.58-1.14Zm1.26,15.87V70.68a1.85,1.85,0,0,0-.5-1.29,1.6,1.6,0,0,0-1.21-.54H297.75a1.53,1.53,0,0,0-1.19.54,1.84,1.84,0,0,0-.49,1.29V82.17a1.8,1.8,0,0,0,.49,1.28,1.55,1.55,0,0,0,1.19.52H309a1.62,1.62,0,0,0,1.21-.52A1.81,1.81,0,0,0,310.75,82.17Z"
                transform="translate(-152.35 -65.93)"
              />
              <path
                className="cls-1"
                d="M320.23,86.55h-2.41V66.3h2.41Z"
                transform="translate(-152.35 -65.93)"
              />
              <path
                className="cls-1"
                d="M341.4,66.3h2.4V86.55h-4.05L327.33,68V86.55h-2.4V66.3h4.36l12.11,18Z"
                transform="translate(-152.35 -65.93)"
              />
            </svg>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
