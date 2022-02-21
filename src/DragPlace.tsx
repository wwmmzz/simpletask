import React, { useState, useRef } from "react";
import { Layout, Row, Col, Button, Modal } from "antd";
import { TText, TImg } from "./type";
import Img from "./components/Img";
import Text from "./components/Text";

const { Header, Content } = Layout;

interface IDragPlace {
  save: any;
  contentEl: any;
  dragEl: any;
  setContentEl: (p: any[]) => void;
}

const DragPlace: React.FC<IDragPlace> = (props) => {
  const { save, contentEl, dragEl, setContentEl } = props;

  const [modalVisiable, setModalVisiable] = useState(false);
  const [el, setEl] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");

  const cache = useRef((save && JSON.parse(save)) || []);

  const select = useRef();
  const textEl = useRef<Element>();

  const dragoverHandler = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "copy";
  };
  const dropHandler = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    // var data = ev.dataTransfer.
    // console.dir(ev.target);
    // const node = textEl.current!.cloneNode();
    // console.log(node);
    // ev.target.parentNode.appendChild(node);
    setContentEl([...contentEl, { ...dragEl.current }]);
    cache.current = [...contentEl, { ...dragEl.current }];
  };

  return (
    <Layout>
      <Header>
        <Row>
          <Col span={12}>
            <Button
              onClick={() => {
                localStorage.setItem("save", JSON.stringify(cache.current));
              }}
            >
              保存
            </Button>
          </Col>
          <Col span={12}>
            <Button
              onClick={() => {
                setModalVisiable(true);
              }}
            >
              预览
            </Button>
          </Col>
        </Row>
      </Header>
      <Content onDrop={dropHandler} onDragOver={dragoverHandler}>
        {contentEl.length &&
          contentEl.map((t: any) => {
            if (t.type == "txt") {
              return (
                
                  <Text
                    key={t.id}
                    setEl={setEl}
                    setText={setText}
                    t={t as TText}
                    select={select}
                  ></Text>
         
              );
            } else {
              return ( 
                  <Img
                    key={t.id}
                    t={t as TImg}
                    setEl={setEl}
                    setImg={setImg}
                    select={select}
                  />
              );
            }
          })}
      </Content>
      <Modal 
      visible={modalVisiable} 
      footer={null}
      onCancel={()=>{
        setModalVisiable(false)
      }}
      >
        {contentEl.length &&
          contentEl.map((t: any) => {
            if (t.type == "txt") {
              return (
                
                  <Text
                    key={t.id}
                    setEl={setEl}
                    setText={setText}
                    t={t as TText}
                    select={select}
                  ></Text>
         
              );
            } else {
              return ( 
                  <Img
                    key={t.id}
                    t={t as TImg}
                    setEl={setEl}
                    setImg={setImg}
                    select={select}
                  />
              );
            }
          })} 
      </Modal>
    </Layout>
  );
};

export default DragPlace;
