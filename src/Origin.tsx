import React, { Fragment } from 'react';
import { Button } from 'antd';
import initImg from './img/1.jpg'
import styled from 'styled-components';

const ElButton = styled(Button)`
  width:80%;
  margin-bottom: 2px;
`


interface IOrigin {
  updateDragEl: (d: any) => void;
  contentEl: any;
}

const Origin: React.FC<IOrigin> = (props) => {
  const { updateDragEl, contentEl } = props;

  const updateText = ()=>{
    updateDragEl({
      id: contentEl.length,
      type: 'txt',
      value: '请输入文字',
    });
  }

  const updateImg = ()=>{
    updateDragEl({
      id: contentEl.length,
      type: 'img',
      imgSrc: initImg,
    });
  }

  return (
    <Fragment>
      <div>
        <ElButton
          draggable
          type="primary"
          onDragStart={() => {
            updateText()
          }}
        >
          文字
        </ElButton>
      </div>
      <div>
        <ElButton
          type="primary"
          draggable
          onDragStart={() => {
            updateImg()
          }}
        >
          图片
        </ElButton>
      </div>
    </Fragment>
  );
};

export default Origin;
