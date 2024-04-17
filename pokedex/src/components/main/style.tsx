import styled from "styled-components";

const StyleMain = styled.div`
    color: black;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 1rem;


    @media (max-width: 480px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `;

    const StyleLoadPokemonButton = styled.button`
    background-color: #EE6B2F;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 3px;
    margin-bottom: 1rem;
    `;

export  {StyleMain, StyleLoadPokemonButton};