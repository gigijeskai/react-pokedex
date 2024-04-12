import { FunctionComponent, ReactNode } from "react";
import StyleButtonSearch from "./style";

interface Props {
  children: ReactNode; 
  onClick?: () => string | void;
}

const ButtonSearch: FunctionComponent<Props> = ({ children, onClick }) => {
  return <StyleButtonSearch onClick={onClick}>{children}</StyleButtonSearch>;
};

export default ButtonSearch;
