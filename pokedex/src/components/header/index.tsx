import { FunctionComponent } from "react";
import StyleHeader from "./style";
import Input from "../input/input";


const Header: FunctionComponent = () => {
  return (
    <StyleHeader>
        <div>
      <h3>Name or Number</h3>
      </div>
      <div>
      <Input />
      </div>
    </StyleHeader>
  );
};

export default Header;
