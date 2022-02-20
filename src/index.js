import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Youtube from "./service/youtube";
// 딱 한번만 Youtube 인스턴스를 생성한다. -> App컴포넌트로 보내기
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
