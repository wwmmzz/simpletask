import React from 'react';

type TText = {
  id: number;
  type: string;
  value: string;
};

interface IText {
  item: TText;
  setEl: (p: string) => void;
  setText: (p: any) => void;
  setSelect: (p: any) => void;
  select: any;
}

const Text: React.FC<IText> = (props) => {
  const { setEl, setText, item, setSelect, select } = props;

  const handleClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setEl('text');
    setText(item.value);
    setSelect(item);
  }

  return (
    <div
      draggable
      key={item.id}
      style={select.id == item.id ? { border: 'dashed' } : {}}
      onDragStart={() => {
        setSelect(item);
      }}
      onClick={handleClick}
      dangerouslySetInnerHTML={{__html:item.value}}
    >
    </div>
  );
};

export default Text;
