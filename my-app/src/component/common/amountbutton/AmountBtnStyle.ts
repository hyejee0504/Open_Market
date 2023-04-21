import styled from "styled-components";

const AmountWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    width: 152px;
    height: 50px;
    border: 1px solid var(--color-grey);
    border-radius: 5px;
    margin: 20px 0;
`

const DecreaseBtn = styled.button`
    height: 100%;
    border-right: 1px solid var(--color-grey);
    border-radius: 5px 0 0 5px;
    &:hover {
      background-color: var(--color-brightGrey);
    }
    &:disabled {
      background-color: var(--color-white);
      cursor: default;
    }
`

const IncreaseBtn = styled.button`
    height: 100%;
    border-left: 1px solid var(--color-grey);
    border-radius: 0 5px 5px 0;
    &:hover {
      background-color: var(--color-brightGrey);
    }
    &:disabled {
      background-color: var(--color-white);
      cursor: default;
  }
`

const AmountText = styled.p`
    text-align: center;
    font-size: 18px;
    line-height: 23px;
`

export {DecreaseBtn, IncreaseBtn, AmountText, AmountWrapper}