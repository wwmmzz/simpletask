import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { UploadRequestOption } from "rc-upload/lib/interface";
import React from "react";


const { Dragger } = Upload;

interface IImgEdit {
  handleUpload : (s:string)=>void
}

const ImgEdit:React.FC<IImgEdit> = (props)=>{

  const {handleUpload} = props

  const  customRequest = (option: UploadRequestOption<FormData>)=> {
    const formData = new FormData();
    formData.append("files[]", option.file);
    const reader = new FileReader();
    reader.readAsDataURL(option.file as Blob);
    reader.onloadend = function (e) {
    
      if (e && e.target && e.target.result) {
        option.onSuccess!(formData);
        message.success('上传成功')
        handleUpload(e.target.result as string);
      }
    };
  }
  return(
    <div>
    <Dragger showUploadList={false} multiple={false}  customRequest={customRequest}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
       点击或拖拽上传
      </p>
    </Dragger>
  </div>
  )
}

export default ImgEdit