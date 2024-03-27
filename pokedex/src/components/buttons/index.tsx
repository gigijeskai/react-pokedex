import { FunctionComponent } from "react";
import  StyleButtonSearch  from "./style";

interface Props {
    text: string;
}

const ButtonSearch: FunctionComponent<Props> = ({text}) => {
    return(
        <StyleButtonSearch>
            {text}
        </StyleButtonSearch>
    )
}

export default ButtonSearch;