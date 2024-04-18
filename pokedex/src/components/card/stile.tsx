import styled from "styled-components";

const StyleCard = styled.div`
  color: white;
  width: 30%;
  margin: 1rem;
  display: flex;
  justify-content: center;
  padding: 1rem;
  flex-direction: column;
  border: 5px solid black;
  background-color: #00000091;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 25%;
  }
  @media (max-width: 468px) {
    width: 50%;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
`;

const StyleSingleCategory = styled.div`
  padding: 0.5rem;
`;

const StyleNameUppercase = styled.span`
  text-transform: uppercase;
`;

export {
  StyleCard,
  StyleNameUppercase,
  StyleCardCategory,
  StyleSingleCategory,
  StyleCardImageContainer,
};
