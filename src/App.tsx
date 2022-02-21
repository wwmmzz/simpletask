import { Button, Layout } from "antd";
import React, { useEffect } from "react";
import { connect } from "dva";
import { Dispatch } from "redux";
import DragPlace from "./DragPlace/index";
import Edit from "./Edit/index";
import { IApp, TEl } from "./type";
import Origin from "./Origin";
import styled from "styled-components";

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  overflow: auto;
  padding-top: 10;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  background: #e3e3e3;
`;

const LeftSider = styled(StyledSider)`
  left: 0;
  text-align: center;
`;

const RightSider = styled(StyledSider)`
  right: 0;
`;

interface App {
  dispatch: Dispatch<any>;
}

const App: React.FC<App & IApp> = (props) => {
  const { dispatch, contentEl } = props;

  useEffect(() => {
    const save = localStorage.getItem("save");

    updateContent((save && JSON.parse(save)) || []);
  }, []);

  const updateContent = (content: Array<TEl>) => {
    dispatch({
      type: "app/update",
      payload: {
        contentEl: content,
      },
    });
  };

  const updateDragEl = (value: TEl) => {
    dispatch({
      type: "app/update",
      payload: {
        dragEl: value,
      },
    });
  };

  return (
    <Layout>
      <LeftSider>
        <Origin contentEl={contentEl} updateDragEl={updateDragEl} />
      </LeftSider>
      <DragPlace />
      <RightSider width={400}>
        <Button type="primary">基本属性</Button>
        <Edit />
      </RightSider>
    </Layout>
  );
};

export default connect(({ app }: { app: IApp }) => ({
  ...app,
}))(App);
