import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import authSelectors from 'redux/auth/authSelectors';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import Footer from 'components/Footer/Footer';

import { Toolbar, Container, CircularProgress, Box } from '@mui/material';
import { AppBarStyled } from 'utils/Header';

export default function StyledAppBar() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <>
      <AppBarStyled>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </Container>
      </AppBarStyled>

      <Suspense
        fallback={
          <Box sx={{ width: '100vw', height: '100vh', position: 'relative' }}>
            <CircularProgress
              sx={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </Box>
        }
      >
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
}
