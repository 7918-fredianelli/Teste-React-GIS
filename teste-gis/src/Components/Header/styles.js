import styled from "styled-components";

export const HeaderContainer = styled.header`
    grid-column: 1/4;
    grid-row: 1/2;
    background-color: white;
    color: rgb(255,0,255);
    border-bottom: 1px solid rgb(255,0,255);
    padding: 8px;
`

export const Button = styled.button`{
    text-decoration: none;
    outline: none;
    cursor: pointer;
    border: none;
    background-color: ${props => props.corDeFundo};
    color: ${props => props.cor};
    margin-top: 8px;
    font-size: 20px;
    font-weight: bold;
    :hover{
        color: #ff40ff;
    }
}`