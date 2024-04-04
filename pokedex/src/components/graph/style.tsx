import styled from "styled-components";

const StyleGraph = styled.div`
display: flex;
  flex-direction: column;
  padding: 1rem;`;

const StyleBox = styled.div`
  width: calc(100% / 15); 
  height: 30px; 
  background-color: #30a7d7; 
  border: 1px solid black; 
  border-radius: 5px;
  border: none
`;

export { StyleGraph, StyleBox };
