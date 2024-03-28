import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ButtonSearch from "../buttons";


const Input: FunctionComponent = () => {
    return (
        <div>
        <input type="text" />
        <ButtonSearch>
        <FontAwesomeIcon icon={faSearch} />
      </ButtonSearch>
        </div>
    );
    }

    export default Input;