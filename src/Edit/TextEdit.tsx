import { Editor } from "@tinymce/tinymce-react";
import React, { useRef,useEffect } from "react";
import type { Editor as E } from "tinymce";
import { TEl } from "../type";

interface ITextEdit {
  text:string;
  select:TEl;
  onEditorChange:(v:any)=>void;
}

const TextEdit:React.FC<ITextEdit> = (props)=>{

  const { onEditorChange,text,select } = props

  const editorRef = useRef<E>();

  useEffect(()=>{
    if(select.type=='txt'){
      
      editorRef.current?.setContent(text)
    }
  },[select])


  return(
    <Editor
    onInit={(evt, editor) => (editorRef.current = editor)}
    initialValue={`${text}`}
    init={{
      height: 500,
      menubar: false,
      toolbar: "bold italic backcolor ",
      content_style:
        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
    }}
    onEditorChange={onEditorChange}
  />
  )
}

export default TextEdit