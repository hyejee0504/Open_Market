import React, {useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../../hook/hooks';
import * as S from "./AmountBtnStyle";
import { getToken } from '../../../features/loginSlice';
import { SVGIcon } from '../../icon/SVGIcon';




interface AmountBtnProps {
    count?: number;
    getCount?: (res: number) => void; //선택 개수를 반환
    product_id?: number;
    cart_item_id?: number;
    // item?: CartItem;
    stock: number;
  }

export default function AmountBtn({count,  stock} : AmountBtnProps) {
    const dispatch = useAppDispatch();
    const Token = useAppSelector(getToken) || "";

    const [amount, setAmount] = useState(count || 0);
    const [onIncreaseBtn, setOnIncreaseBtn] = useState(true);

    const onIncrease = () => {
        if (!onIncreaseBtn) return;
        const quantity = amount + 1;
        if (quantity >= stock) {
          setOnIncreaseBtn(!onIncreaseBtn);
        }
        setAmount(quantity);
        // getCount?.(quantity);
        //장바구니 수량 변경 처리
        // if (item) {
        //   const { product_id, cart_item_id, is_active } = item;
        //   dispatch(fetchPutCartQuantity({ TOKEN, product_id, quantity, cart_item_id, is_active }));
        // }
      };
    
      const onDecrease = () => {
        const quantity = amount - 1 < 1 ? 1 : amount - 1;
        if (!onIncreaseBtn && quantity <= stock) {
          setOnIncreaseBtn(true);
        }
        setAmount(quantity);
        // getCount?.(quantity);
        // if (item) {
        //   const { product_id, cart_item_id, is_active } = item;
        //   dispatch(fetchPutCartQuantity({ TOKEN, product_id, quantity, cart_item_id, is_active }));
        // }
      };

  return (
    <S.AmountWrapper>
        <S.DecreaseBtn onClick={onDecrease} disabled={amount <= 1 || stock === 0}>
            <SVGIcon id="icon-minus-line"/>
        </S.DecreaseBtn>
        <S.AmountText>{amount}</S.AmountText>
        <S.IncreaseBtn onClick={onIncrease} disabled={!onIncreaseBtn || stock === 0}>
            <SVGIcon id="icon-plus-line"/>
        </S.IncreaseBtn>
    </S.AmountWrapper>
  )
}
