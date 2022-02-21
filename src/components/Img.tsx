import React from 'react';

type TImg = {
  id: number;
  type: string;
  imgSrc: string;
};

interface IImg {
  item: TImg;
  setEl: (p: string) => void;
  setImg: (p: any) => void;
  setSelect: (p: any) => void;
  select: any;
}

const Img: React.FC<IImg> = (props) => {
  const { setEl, setImg, item, setSelect, select } = props;

  const handleClick =  (e:React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.stopPropagation();
    setEl('img');
    let img = (e.target as HTMLImageElement).src.split('/').pop();
    setImg(img);
    setSelect(item);
  }

  return (
    <div>
      <img
        draggable
        key={item.id}
        style={select.id == item.id ? { border: 'dashed' } : {}}
        src={`${item.imgSrc}`}
        onDragStart={() => {
          setSelect(item);
        }}
        onClick={handleClick}
      ></img>
    </div>
  );
};

export default Img;
