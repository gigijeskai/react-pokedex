import styled from "styled-components";

const StylePokemonsStatistics = styled.div`
  padding-left: 5rem;
`;

const BlueDiv = styled.div`
  background-color: #30a7d7;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  border-radius: 10px;
  border: none;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const WhiteText = styled.h4`
  color: white;
`;

const StyleCenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyleAbility = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyleType = styled.div`
  margin-left: 1rem;
  margin-top: 2rem;
`;

export {
  StylePokemonsStatistics,
  StyleType,
  StyleAbility,
  BlueDiv,
  WhiteText,
  StyleCenterDiv,
};
