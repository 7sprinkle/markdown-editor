import * as React from "react";
import styled from "styled-components";

const StyledBotton = styled.button`
  background-color: #5B622E;
  border: none;
  box-shadow: none;
  color: white;
  font-size: 1rem;
  height: 2rem;
  min-width: 5rem;
  padding: 0 1rem;

  &.cancel{
    background: #62592C;
    border: 1px solid gray;
    color: white;
  }
`

interface Props{
  cancel?: boolean
  children:string
  onClick: () => void
}

export const Button:React.FC<Props> = (props) => (
  <StyledBotton onClick = {props.onClick} className={props.cancel ? 'cancel' : ''}>
    {props.children}
  </StyledBotton>
)