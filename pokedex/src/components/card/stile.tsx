import styled from 'styled-components';

const StyleCard = styled.div`
    color: black;
    width: 20%;
    margin: 1rem;
    display: flex;
    justify-content: center;
    padding: 1rem;
    flex-direction: column;
    border: 5px solid black;
    `;
    

    const StyleCardImageContainer = styled.div`
display: flex;
justify-content: center;
    `;

    const StyleCardCategory = styled.div<{ categoryColor: string }>`
    display: flex;
gap: 1rem;
background-color: ${({ categoryColor }) => categoryColor};
  color: white;
  padding: 10px; 
  margin-bottom: 5px; 
`;

    const StyleSingleCategory = styled.div`
   
    padding: 0.5rem;
    `;

    const StyleNameUppercase = styled.span`
    text-transform: uppercase;
    `;


    export  {StyleCard, StyleNameUppercase, StyleCardCategory, StyleSingleCategory, StyleCardImageContainer};