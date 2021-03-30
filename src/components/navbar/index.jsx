import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from '../brandLogo';
import { Button } from '../button';
import {Marginer} from '../../components/marginer';

const NavbarContainer = styled.div`
    width: 100%;
    height:65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5em;
`;

const AccessibilityContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

`;

const AnchorLink = styled.a`
    font-size: 12px;
    color: #fff;
    cursor:pointer;
    text-decoration: none;
    outline: none;
    transition: all 200ms ease-in-out;
    
        &:hover {
            filter: constrast(0.6);
    }
`;

const Seperator = styled.div `
    min-height: 45%;
    width: 1px;
    background-color: #fff;

`;

export function Navbar(props) {
    return (
    
    <NavbarContainer>
        <BrandLogo />
        <AccessibilityContainer>
            <AnchorLink>Specialists Portal</AnchorLink>
            <Marginer direction="horizontal" margin={18}/>
            <Seperator />
            <Marginer direction="horizontal" margin={10}/>
            <Button size={11} >Register</Button>
            <Marginer direction="horizontal" margin={10}/>
            <AnchorLink>Login</AnchorLink>
        </AccessibilityContainer>
    </NavbarContainer>

    );
}