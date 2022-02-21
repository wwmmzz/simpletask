import React, { useEffect, useState, useRef } from "react";

type TText = {
  id:number,
  type:string,
  value:string
}

interface IText{
  t:TText
  setEl:(p:string)=>void,
  setText:(p:any)=>void,
  select:any
}

const Text: React.FC<IText> = (props) => {

  const { setEl,setText,t,select } = props


  return (
    <div
      key={t.id}
      onClick={(e) => {
        setEl("text");
        setText((e.target as HTMLDivElement).textContent);
        select.current = t;
        console.log("text");
      }}
    >
      {t.value}
    </div>
  );
};

export default Text
