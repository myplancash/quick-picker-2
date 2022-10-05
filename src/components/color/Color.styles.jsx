import styled from 'styled-components';

export const ColorDiv = styled.label`
  border: 1px solid #070606;
  height: 100px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  align-self: center;
  cursor: pointer;
  background-color: ${({color}) => color };

 
`

