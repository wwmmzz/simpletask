import { Modal } from "antd";
import React from "react";
import ViewList from './ViewList';

interface IModalView {
  modalVisiable:boolean,
  setModalVisiable:(v:boolean)=>void,
}

const ModalVIew:React.FC<IModalView > = (props)=>{

  const { modalVisiable, setModalVisiable  } = props

  return (
    <Modal
    visible={modalVisiable} 
    footer={null}
    onCancel={() => {
      setModalVisiable(false);
    }}
  >
   <ViewList
   isModal={true}
   />
  </Modal>
  )
}

export default  ModalVIew