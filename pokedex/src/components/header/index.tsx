import { FunctionComponent } from "react";
import  StyleHeader  from "./style";
import ButtonSearch from "../buttons";

const Header: FunctionComponent = () => {
  return (
    <StyleHeader>
        <h2>Name or Number</h2>
<input type="text"></input>
<ButtonSearch text="search"/>
    </StyleHeader>
  );
};

export default Header;