import { connect } from "dva";
import React from "react";
import { Dispatch } from "redux";
import Img from "../components/Img";
import Text from "../components/Text";
import { IApp, TEl, TImg, TText } from "../type";

interface IViewList {
  dispatch: Dispatch<any>;
  isModal:boolean
}

const ViewList:React.FC<IViewList& IApp> = (props)=>{

  const { contentEl, dispatch, select,isModal } = props;


  const setEl = (val: string) => {
    dispatch({
      type: "app/update",
      payload: {
        el: val,
      },
    });
  };

  const setText = (val: string) => {
    dispatch({
      type: "app/update",
      payload: {
        text: val,
      },
    });
  };

  const setImg = (val: string) => {
    dispatch({
      type: "app/update",
      payload: {
        img: val,
      },
    });
  };

  const setSelect = (val: TEl) => {
    dispatch({
      type: "app/update",
      payload: {
        select: val,
      },
    });
  };


  return(
    <>
    {contentEl.length &&
      contentEl.map((item: any) => {
        if (item.type == "txt") {
          return (
            <Text
              select={select}
              key={item.id}
              setEl={setEl}
              setText={setText}
              item={item as TText}
              setSelect={isModal?()=>{}:setSelect}
            ></Text>
          );
        } else {
          return (
            <Img
              select={select}
              key={item.id}
              item={item as TImg}
              setEl={setEl}
              setImg={setImg}
              setSelect={isModal?()=>{}:setSelect}
            />
          );
        }
      })||null}
    </>
    
  )
}

export default connect(({ app }: { app: IApp }) => ({
  ...app,
}))(ViewList);