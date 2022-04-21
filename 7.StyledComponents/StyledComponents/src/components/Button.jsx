import styled from "styled-components";

export const Button = styled.button`
    font-family: sans-serif;
    padding: 10px 15px;
    margin: 7px;
    border: 0;
    background-color: ${(props) => (props.bg? props.bg: "white")};
    color: ${(props) => (props.rang? props.rang: "black")};
    border: ${(props) => (props.boundary? props.boundary: "none")};
    border-radius: 5px;
`