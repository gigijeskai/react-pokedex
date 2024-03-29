import styled from 'styled-components';

const StyleCard = styled.div`
    color: black;
    width: 20%;
    margin: 1rem;
    background-color: green;
    display: flex;
    justify-content: center;
    padding: 1rem;
    flex-direction: column;
    `;
    
    const StylecardImage = styled.img`
min-width: 200px;
min-height: 200px;
    `;

    const StyleCardImageContainer = styled.div`
display: flex;
justify-content: center;
    `;

    const StyleCardCategory = styled.div`
display: flex;
gap: 1rem;
    `;

    const StyleSingleCategory = styled.div`
    background-color: yellow;
    padding: 0.5rem;
    `;

    const StyleNameUppercase = styled.span`
    text-transform: uppercase;
    `;


    export  {StyleCard, StyleNameUppercase, StylecardImage, StyleCardCategory, StyleSingleCategory, StyleCardImageContainer};