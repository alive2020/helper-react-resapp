import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    border: none;
    outline: none;
    color: #fff;
    padding: 10px 1.5em;
    font-size: ${({size}) => size ? size +"px" : "16px"};
    font-weight: 600;
    cursor: pointer;
    border-radius: 3px;
    background-color: #044180;
    transition: all 200ms ease-in-out;

    &:hover {
        background-color: #165ea7;
    }
    &:focus {
        outline: none;
    }
`;

export function Button (props) {
    const {size} = props;

    return <ButtonWrapper size={size}>{props.children}</ButtonWrapper>
}