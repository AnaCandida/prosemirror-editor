import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Footer from './Footer.css'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="#ffdab9" href="https://www.linkedin.com/in/anacandidaquadros/">
        Ana Quadros
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
      <Container maxWidth="sm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#ffdab9',  position: 'absolute',
    bottom:0}}>
            <Typography variant="body1">
        Build with ❤️
            </Typography>
            <Copyright />
          </Container>
  );
}