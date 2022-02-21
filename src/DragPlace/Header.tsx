import { Button, Col, Row } from "antd";
import React from "react";
import { TEl } from "../type";
import styled from "styled-components";

const CenterCol = styled(Col)`
  text-align: center;
`

interface IHeader{
  setModalVisiable:(v:boolean)=>void,
  setSelect:(t:any)=>void;
  contentEl:TEl[],
}

const Header:React.FC<IHeader> = (props)=>{
  const { contentEl,setModalVisiable,setSelect } = props;

  return(
    <Row justify='space-between'>
    <CenterCol span={12} >
      <Button
        type="primary"
        onClick={() => {
          localStorage.setItem("save", JSON.stringify(contentEl));
        }}
      >
        保存
      </Button>
    </CenterCol>
    <CenterCol span={12}>
      <Button
        type="primary"
        onClick={() => {
          setSelect({} as TEl);
          setModalVisiable(true);
        }}
      >
        预览
      </Button>
    </CenterCol>
  </Row>
  )
}

export default Header