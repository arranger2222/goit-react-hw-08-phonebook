import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { useState } from 'react';

import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const [tabValue, setTabValue] = useState('home');

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  // const handleOpenNavMenu = event => {
  //   setAnchorElNav(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseContactsNavButton = () => {
    setAnchorElNav(null);

    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    navigate('/contacts', { replace: true });
  };

  const handleCloseHomeNavButton = () => {
    setAnchorElNav(null);
    navigate('/');
  };

  return (
    <>
      <>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          <MenuItem onClick={handleCloseHomeNavButton}>
            <Typography textAlign="center">Phonebook</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseContactsNavButton}>
            <Typography textAlign="center">Contacts</Typography>
          </MenuItem>

          {/* ))} */}
        </Menu>
      </>

      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="secondary"
          aria-label="Navigation tabs"
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          <Tab
            value="home"
            label="Phonebook"
            onClick={handleCloseHomeNavButton}
            sx={{ my: 2, color: 'white', display: 'block' }}
          />

          <Tab
            value="contacts"
            label="Contacts"
            onClick={handleCloseContactsNavButton}
            sx={{ my: 2, color: 'white', display: 'block' }}
          />
        </Tabs>
      </Box>
    </>
  );
};

export default Navigation;
