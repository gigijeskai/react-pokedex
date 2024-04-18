import React, { FunctionComponent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ButtonSearch from "../buttons";
import { useDispatch } from "react-redux";
import { fetchPokemonByName } from "../../reducers/apiReducer";

const Input: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState(""); 
  const dispatch = useDispatch();

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(event.target.value);
}

const handleButtonClick = () => {
  dispatch(fetchPokemonByName(inputValue)); 
  setInputValue("");
  }

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
        <ButtonSearch onClick={handleButtonClick}>
        <FontAwesomeIcon icon={faSearch} />
      </ButtonSearch>
        </div>
    );
    }

    export default Input;