import React from 'react'

type PhoneSelectInputProps = {
  selectItems?: string[];
  onClick?: (selected: string) => void;
  checkItem?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  radius?: string;
  padding?: string;
  textAlign?: string;
};

function PhoneSelectInput({selectItems, onClick,
checkItem,
width,
maxWidth,
minWidth,
radius,
padding,
textAlign,
}: PhoneSelectInputProps) {

  return (
    <div>
      <select>
        <option value="">::선택::</option>
        <option value="011">011</option>
        <option value="016">016</option>
        <option value="017">017</option>
        <option value="019">019</option>
        <option value="010">010</option>
      </select>
    </div>
  )
}

export {PhoneSelectInput}
