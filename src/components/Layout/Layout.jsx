import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Box,
  Header,
  NavigLink,
  Footer,
  FooterLink,
  LinkedIn,
  GitHub,
  FooterText,
} from './Layout.styled';
import { IconContext } from 'react-icons';

export const Layout = () => {
  return (
    <Box>
      <Header>
        <nav>
          <NavigLink to="/">Home</NavigLink>
          <NavigLink to="movies">Movies</NavigLink>
        </nav>
      </Header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer>
        <FooterLink
          href="https://www.linkedin.com/in/pavlosavchenko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider
            value={{
              color: '#777777',
              size: '25px',
              style: { verticalAlign: 'middle' },
            }}
          >
            <LinkedIn />
          </IconContext.Provider>
          ;
        </FooterLink>
        <FooterLink
          href="https://github.com/neutr00n"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider
            value={{
              color: '#777777',
              size: '25px',
              style: { verticalAlign: 'middle' },
            }}
          >
            <GitHub />
          </IconContext.Provider>
        </FooterLink>
        <FooterText> &copy; 2023</FooterText>
      </Footer>
    </Box>
  );
};
