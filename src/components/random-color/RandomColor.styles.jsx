import styled from 'styled-components'

export const RandomButton = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  font-size: 1rem;

  background-color: #DB1F48;
  color: #fff;
  transition: background-color 1s;

  padding: .5rem;
  color: #fefefe;
  margin: 0 auto;
  text-align: center;
  border: -1px -3px solid black;

  &:hover {
    background-color: #004369;
  }

  &:focus,
  &:active {
    background-color: black;
    transition: none;
  }
 

`