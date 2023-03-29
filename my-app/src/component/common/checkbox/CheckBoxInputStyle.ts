import styled from "styled-components";
import check_box from "../../../asset/icon/check-box.png"
import check_box_fill from "../../../asset/icon/check-fill-box.png"

export const CheckBoxContainer = styled.div`
display: inline-flex; 
align-items: center;
 cursor: pointer; 
 font-size: 1rem;
`
export const CheckBox = styled.input.attrs({ type: "checkbox" })`
appearance: none;

    &:after{
        content: "   sdfsasdfasddfs";
        display: inline-block;
        color: transparent;
        width: 15px;
        background: ${({checked}) => (checked === true ? `url(${check_box_fill}) no-repeat` : `url(${check_box}) no-repeat`)};
        background-size:contain;
    }
    &:hover{
        cursor:pointer;
    }
`



