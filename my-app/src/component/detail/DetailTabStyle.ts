import styled from "styled-components";

const TabWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: span 2;
  width: 100%;
  margin: 100px auto 200px;

`
const TabBtnWrapper = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`

const TabBtnList = styled.li<{on?:boolean}>`

    text-align: center;
    border-bottom: ${({on}) => (on === true ?  "6px solid var(--color-main)" : "6px solid var(--color-grey)")};
        &:hover{
            cursor: pointer;
        }

`
const TabBtn = styled.button`
    height: 60px;
    font-size: 18px;
    color: var(--color-darkGrey);
`

const TabDetail = styled.div`
    height: 500px;
    background-color: var(--color-brightGrey);
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: var(--color-darkGrey);
`

export {TabWrapper, TabBtnWrapper, TabBtn, TabBtnList, TabDetail}