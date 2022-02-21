import React, { useState,useRef } from "react";
import { Layout, Button, Row, Col } from "antd";
import { Editor } from "@tinymce/tinymce-react";
import DragPlace from "./DragPlace";
import { TText, TImg } from "./type";


const { Sider, Content, Header, Footer } = Layout;

const App: React.FC = (props) => {
  const save = localStorage.getItem("save");

  const [contentEl, setContentEl] = useState<Array<TText | TImg>>(
    (save && JSON.parse(save)) || []
  );

  let dragEl = useRef<TText | TImg>();


  return (
    <Layout>
      <Sider>
        <div>
          <Button
           draggable
           onDragStart={() => {
             dragEl.current = {
               id: contentEl.length,
               type: "txt",
               value: "请输入文字",
             };
           }}
          >文字</Button>
        </div>
        <div>
          <Button
           draggable
           onDragStart={() => {
             dragEl.current = {
               id: contentEl.length,
               type: "img",
               imgSrc: "1.jpg",
             };
           }}
          >图片</Button>
        </div>
      </Sider>
      <DragPlace 
      save={save}
      contentEl={contentEl}
      dragEl={dragEl}
      setContentEl={setContentEl}
      />
      <Sider>
        <Button>基本属性</Button>
        <Editor
          // onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </Sider>
    </Layout>
  );
};

export default App;
