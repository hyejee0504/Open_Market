import styled from "styled-components";

const LoginInput = styled.input`
    display: block;
    width: 480px;
    height: 60px;
    border: 0;
    border-bottom: 1px solid var(--color-grey);
    outline: 0; 
    &:focus{
        border-bottom: 2px solid var(--color-main);
    }
`
const ErrorMessage = styled.p`
    color: var(--color-red);
    margin-top: 10px;
`

export {LoginInput, ErrorMessage}