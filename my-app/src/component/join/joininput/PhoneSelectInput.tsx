import React, {useState, useRef} from 'react'
import { SVGIcon } from '../../icon/SVGIcon';

type PhoneSelectInputProps = {
  selectItems: string[];
  onClick?: (selected: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkItem?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  radius?: string;
  padding?: string;
  textAlign?: string;
};

function PhoneSelectInput({selectItems, onClick,
onChange,
checkItem,
width,
maxWidth,
minWidth,
radius,
padding,
textAlign,
}: PhoneSelectInputProps) {

  const [optionToggle, setOptionToggle] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const selectValueRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  const handleChangeOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(optionToggle === true){
      setOptionToggle(false)
    }else{
      setOptionToggle(true)
    }
    
  }

  const handleSelectValue = (e: React.MouseEvent<HTMLElement>) => {
    const value = e.target 
    onChange?.(e.target);
    // setSelectValue(value.innerText);
  }
  

  return (
    <div>
      <input 
        value={selectValue !== "" ? selectValue : selectItems[0]}
        onChange={onChange}
      />
      <button onClick={handleChangeOption}>
      {
        optionToggle === true ? <SVGIcon id='icon-down-arrow'/> : <SVGIcon id='icon-up-arrow'/>
      }
      </button>
      {
        optionToggle === true ? 
        <div>
          {selectItems.map<React.ReactNode>((value) => {
            return <input onClick={handleSelectValue}>{value}</input>
          })}
        </div> : null
      }

    </div>
    
  )
}

export {PhoneSelectInput}
