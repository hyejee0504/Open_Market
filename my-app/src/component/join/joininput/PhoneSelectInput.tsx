import React, {useState} from 'react'
import { SVGIcon } from '../../icon/SVGIcon';

type PhoneSelectInputProps = {
  selectItems: string[];
  onClick: (selected: string) => void;
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

  const handleChangeOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(optionToggle === true){
      setOptionToggle(false)
    }else{
      setOptionToggle(true)
    }   
  }

  const handleSelectValue = (item : string) => {
    onClick(item);
    setSelectValue(item);
  }
  

  return (
    <div>
      <div>
        <input 
          value={selectValue !== "" ? selectValue : selectItems[0]}
        />
        <button onClick={handleChangeOption}>
        {
          optionToggle === false ? <SVGIcon id='icon-down-arrow'/> : <SVGIcon id='icon-up-arrow'/>
        }
        </button>
      </div>
        {
          optionToggle === true ? 
          <ul>
            {selectItems.map((item, index) => {
              return <li key={index}>
                <button type='button' onClick={() => handleSelectValue(item)}>{item}</button>
              </li>
            })}
          </ul> : null
        }
    </div>
  )
}

export {PhoneSelectInput}
