import styled from "styled-components";

const ArrowList = styled.ul<{on?:boolean}>`
    display: ${({on}) => (on === true ? "flex" : "none")};
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 80px;
    bottom: -90px;
    right: -15%;
    animation: fadeInDown 1s;
    background-color: var(--color-white);
    border: 1px solid var(--color-darkGrey);
    z-index: 50;
    border-radius: 10px;

    @keyframes fadeInDown {
        0% {
            opacity: 0;
            transform: translate3d(0, -30%, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
    }
`

const ArrowBtn = styled.button`
    font-size: 14px;
    width: 80px;
    padding: 5px;

    &:hover{
        background-color: var(--color-brightPurple);
        color: var(--color-white);
        border-radius: 10px;
    }
`



export {ArrowList, ArrowBtn}