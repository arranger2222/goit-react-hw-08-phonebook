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
        href="https://github.com/arranger2222"
        target="_blank"
        rel="noopener noreferrer"
      >
        Max_You Studio
      </Link>{' '}
      {new Date().getFullYear()}
    </footer>
  );
}
