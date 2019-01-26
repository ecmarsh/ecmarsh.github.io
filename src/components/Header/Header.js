import React, { Component } from 'react';
import styled from 'styled-components';
import { ScrollContext, themes } from 'contexts/scroll-context';
import Logo from 'components/Logo/';
import Nav from 'components/Navigation/';
import Grid from '../styles/Grid';
import { mediaMax } from '../styles/utils';

const StyledHeader = styled(Grid).attrs({
  as: 'header',
})`
  position: fixed;
  z-index: 100;
  height: 8rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.borderColor};
  background-color: ${props => props.bg};
  transition: background-color 0.1s ease-in-out;

  ${mediaMax.tablet`
    border-color: ${themes.mobile.accent}
    background-color: ${themes.mobile.background}
  `}
`;

class Header extends Component {
  render() {
    return (
      <ScrollContext.Consumer>
        {({ theme, scrollYPosition }) => (
          <StyledHeader bg={theme.background} color={theme.foreground} borderColor={theme.accent}>
            <Logo color={theme.foreground} />
            <Nav {...this.props} color={theme.foreground} scrollYPosition={scrollYPosition} />
          </StyledHeader>
        )}
      </ScrollContext.Consumer>
    );
  }
}
Header.contextType = ScrollContext;

export default Header;
