import styled from "styled-components";

const CommonInput = styled.div`

`;

const LabelText = styled.label`
    font-size: 16px;
    display: block;
    color: #767676;
    margin-bottom: 10px;
`;

const Input = styled.input<{ width?: string; icon?: string }>`
    width: ${({width}) => (width ? width : "480px")};
    height: 54px;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
    background: ${({icon}) => icon && `url(${icon}) no-repeat right 15px center`}
`;

const ErrorMessage = styled.p`
font-size: 16px;
color: #EB5757;

`



export { CommonInput, LabelText, Input, ErrorMessage};