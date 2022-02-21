import { Layout } from "antd";
import { connect } from "dva";
import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { Dispatch } from "redux";
import { IApp, TEl } from "../type";
import Header from "./Header";
import ModalVIew from "./ModalVIew";
import ViewList from "./ViewList";
import styled from "styled-components";

const { Content } = Layout;

const DragPlaceLayout = styled(Layout)`
  margin-left: 200px;
  margin-right: 400px;
  background: #e3e3e3;
`;

const StyledContent = styled(Content)`
  margin-top: 10px;
  height: 100vh;
`;

interface IDragPlace {
  dispatch: Dispatch<any>;
}

const DragPlace: React.FC<IDragPlace & IApp> = (props) => {
  const { contentEl, dragEl, dispatch } = props;

  const [modalVisiable, setModalVisiable] = useState(false);

  const dragoverHandler = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "copy";
  };

  const dropHandler = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();

    if (dragEl.type) {
      setContentEl(
        [...contentEl, { ...dragEl, y: ev.pageY }].sort((a, b) => a.y! - b.y!)
      );

      dispatch({
        type: "app/update",
        payload: {
          dragEl: {},
        },
      });
    }
  };

  const setContentEl = (val: Array<TEl>) => {
    dispatch({
      type: "app/update",
      payload: {
        contentEl: val,
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

  return (
    <DragPlaceLayout>
      <Header
        contentEl={contentEl}
        setSelect={setSelect}
        setModalVisiable={setModalVisiable}
      />
      <StyledContent onDrop={dropHandler} onDragOver={dragoverHandler}>
        {(
          <ReactSortable list={contentEl} setList={setContentEl}>
            <ViewList isModal={false} />
          </ReactSortable>
        ) || null}
      </StyledContent>
      <ModalVIew
        modalVisiable={modalVisiable}
        setModalVisiable={setModalVisiable}
      />
    </DragPlaceLayout>
  );
};

export default connect(({ app }: { app: IApp }) => ({
  ...app,
}))(DragPlace);
