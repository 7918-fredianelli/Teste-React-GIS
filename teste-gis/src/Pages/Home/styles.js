import styled from "styled-components";

export const HomeContainer = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
    margin: 0; 
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div{
        text-align: left;
    }
    li{
        list-style: none;
    }

    table{
        /* border: 1px solid black; */

        th{
            border: 3px solid black;
        }
        td{
            border: 3px solid black;
        }
    }

`

export const Button = styled.button`{
    text-decoration: none;
    outline: none;
    cursor: pointer;
    border: none;
    color: white;
    background-color: ${props => props.cor};
    padding: 8px;
    margin: 5px;
    border-radius: 8px;
    :hover{
        background-color: #ff40ff;
    }
}`