import { FunctionComponent, ReactNode } from "react";
import StyleButtonSearch from "./style";

interface Props {
  children: ReactNode; 
}

const ButtonSearch: FunctionComponent<Props> = ({ children }) => {
  return <StyleButtonSearch>{children}</StyleButtonSearch>;
};

export default ButtonSearch;
