import { connect } from "dva";
import React, { Fragment } from "react";
import { Dispatch } from "redux";
import { IApp, TEl } from "../type";
import ImgEdit from "./ImgEdit";
import TextEdit from './TextEdit';

interface IEdit {
  dispatch: Dispatch<any>;
}

const Edit: React.FC<IEdit & IApp> = (props) => {
  const { dispatch, text, select, contentEl, el } = props;

  const onEditorChange = (value: any) => {

      updateContent(
        contentEl.map((e) => {
          if (e.id == select.id) {
            return { ...select, value };
          } else {
            return e;
          }
        })
      );
  };

  const setImg = (val: string) => {
    dispatch({
      type: "app/update",
      payload: {
        img: val,
      },
    });
  };

  const updateContent = (content: Array<TEl>) => {
    dispatch({
      type: "app/update",
      payload: {
        contentEl: content,
      },
    });
  };
  const handleUpload = (src: string) => {
    setImg(src);

    updateContent(
      contentEl.map((c) => {
        if (c.id !== select.id) {
          return {
            ...c,
          };
        } else {
          return {
            ...select,
            imgSrc: src,
          };
        }
      })
    );
  };

  return (
    <Fragment>
      {el && el == "text" ? (
        <TextEdit
        onEditorChange={onEditorChange}
        text={text}
        select={select}
        />
      ) : el == "img" ? (
        <ImgEdit
        handleUpload={handleUpload}
        />
      ) : null}
    </Fragment>
  );
};

export default connect(({ app }: { app: IApp }) => ({
  ...app,
}))(Edit);
