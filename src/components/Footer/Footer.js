import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { FooterStyled } from './Footer.styled';

export default function Footer() {
  return (
    <>
      <FooterStyled
        component="footer"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          py: 3,
          px: 2,
          marginTop: 2,
          backgroundColor: '#3f51b5',
        }}
      >
        <Copyright />
      </FooterStyled>
    </>
  );
}

function Copyright(props) {
  return (
    <footer>
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://github.com/eugene17kotov"
        target="_blank"
        rel="noopener noreferrer"
      >
        My Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </footer>
  );
}
