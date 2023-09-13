/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
import styled, { keyframes } from 'styled-components';

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.5);
  display: flex;
  align-items: ${props => props.changePosition ? props.changePosition : "center"};
  justify-content: center;
`;

/* Transitions */
const right = keyframes`
  from {
    transform: translateY(-200%);
  }
  to {
    transform: translateY(0)
  }
`
export const ContainModal = styled.div`
  width: ${props => props.changeWidth ? props.changeWidth : "400px"};
  min-height: 150px;
  background: #fff;
  position: relative;
  border-radius: 4px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px;
  top: 10px;
  animation: ${right} .5s ease;
`;


export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e8e8e8;
`;

export const H2 = styled.h2`
  font-weight: 400;
  font-size: 25px;
  color: #041737;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 34px;
  right: 8px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: all .3s ease;
  border-radius: 4px;
  color: #041737;

  &:hover {
    background: #f2f2f2;
  }

  .fa-xmark {
    font-size: 18px;
  }
`;