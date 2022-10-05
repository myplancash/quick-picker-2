import styled from 'styled-components'

export const ColorAreaDiv = styled.div`
  height: 120px;
  color: #070606;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center; 
  border: 1px solid #070606;
  text-align: center;
  background-color: ${({hex}) => hex};
`