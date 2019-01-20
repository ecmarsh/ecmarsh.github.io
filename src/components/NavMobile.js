import React, { Component } from 'react';
// eslint-disable-next-line
import styled, { css } from 'styled-components';
import NavLinks from './NavLinks';
import Social from './Social';
import {WrapperButton, StyledNavButton} from './styles/NavButton';

const NavWrapper = styled.aside`
    position: fixed;
    right: 0px;
    height: 100%;
    padding: 0;
    width: 30rem;
    text-align: left;
    background: ${props => props.theme.darkgrey || '#111'};
    transition: all .5s cubic-bezier(0.86, 0, .07, 1);
    overflow: hidden;
`;

const NavInner = styled.nav`
    width: 30rem;
    height: 100%;
    padding-top: 8rem;
    overflow-x: hidden;
    overflow-y: scroll;
    position: absolute;
    left: 0;
`;

const NavMobileUl = styled.ul`
    padding-left: 4.5rem;
    `;

const NavFooter = styled.div`
    color: #666;
    font-size: 1.1rem;
    line-height: 3;
    width: 100%;
    padding: 1rem 4.5rem;
    position: absolute;
    bottom: 0;
`;

class NavMobile extends Component {
    state = {
        on: false,
    }

    toggle = () => {
        this.setState(prevState => ({
            on: !prevState.on
        }));
    }

    render() {
        let { on } = this.state;
        return (
            <>
                <WrapperButton onClick={this.toggle}>
                    <StyledNavButton on={on} />
                </WrapperButton>
                {on && (
                    <NavWrapper>
                        <NavInner>
                            <NavMobileUl>
                                <NavLinks on={on} />
                            </NavMobileUl>
                            <NavFooter>
                                <Social />
                                <p>&copy; 2019 Ethan Marsh</p>
                            </NavFooter>
                        </NavInner>
                    </NavWrapper>
                )}
            </>
        )
    }
}

export default NavMobile;

