import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const Button = styled.button`
  background-color: ${(props => props.background || '#0c284f')};
  color: ${(props => props.color || 'white')};
  font-size: ${(props => props.font || '12px')};
  height: ${(props => props.height || '45px')};
  width: ${(props => props.width || '180px')};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props => props.hover || '#274268')};
}
`;

export const MenuButton = () => {
  return (
    <MenuBtn>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </MenuBtn>
  )
}

const BtnContainer = styled.div`
  cursor: pointer;
`;

const MenuBtn = styled.div`
  cursor: pointer;
  div {
    width: 50px;
    height: 2px;
    background-color: #002b5c;
    margin: 6px 0;
    transition: 0.4s;
  } 
  &:hover {
    div {
      height: 3px;
      margin: 7px 0;
    }
  }
  @media (max-width: 500px) {
    div {
      width: 35px;
      height: 1px;
      background-color: #002b5c;
      margin: 6px 0;
      transition: 0.4s;
    } 
    &:hover {
      div {
        height: 2px;
        margin: 7px 0;
      }
    }
  }
`;

export const CloseButton = (props) => {
  return (
    <CloseBtn>
      <FontAwesomeIcon 
        icon={faTimes} 
        size={props.size} 
        color={props.color}
        onClick={props.click}
      />
    </CloseBtn>
  );
};

const CloseBtn = styled(BtnContainer)`
  margin: 20px 20px 10px 0px;
  :hover {
    transform: scale(1.3)
    }
`;