import styled from "styled-components";

export const Button = styled.button`
    font-family: sans-serif;
    padding: 10px 15px;
    margin: 7px;
    background-color: ${(props) => (
        if(props.theme == "blueBG")
            return "#2490fe";
        else
            return "white";
    )};
    color: ${(props) => (
        if(pro)
    )};
`