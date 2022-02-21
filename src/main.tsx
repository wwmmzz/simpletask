import React from "react";
import ReactDOM from "react-dom";
import dva from 'dva';
import App from './App'
import AppModal from './models/app'
import "antd/dist/antd.css";
import './index.css'
const app = dva();


app.model(AppModal);

app.router(() => <App />);

app.start('#root');

