import React, { useEffect, useState, useRef } from "react";

type TImg = {
  id:number,
  type:string,
  imgSrc:string
}

interface IImg{
  t:TImg
  setEl:(p:string)=>void,
  setImg:(p:any)=>void,
  select:any
}

const Img: React.FC<IImg> = (props) => {

  const { setEl,setImg,t,select } = props

  return (
    <img
      key={t.id}
      src={`/src/img/${t.imgSrc}`}
      onClick={(e) => {
        setEl("img");
        let img = (e.target as HTMLImageElement).src.split("/").pop();
        console.log(img);
        setImg(img);
        // console.log(e.target.src);
        select.current = t;
      }}
    ></img>
  );
};

export default Img
