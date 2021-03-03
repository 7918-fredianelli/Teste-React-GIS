import styled from "styled-components";

export const NewUserContainer = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
    form {
        width: 400px;
        height: 500px;
        text-align: center;

        div{
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;

            input{
                padding: 6px;
            }

        }

        button{
            padding: 8px 16px;
            margin-top: 16px;
            text-decoration: none;
            outline: none;
            cursor: pointer;
            border: none;
            color: white;
            background-color: #e619e5;
            border-radius: 8px;
            :hover{
            background-color: #ff40ff;
            }
        }
    }

    @media only screen and (max-width: 460px) {
        form div{
            text-align: left;
            margin-top: 16px;
        }
    }

`