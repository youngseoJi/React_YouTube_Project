// 협업하는 경우 검색부분, 페이지 목록보는 부분 등 각자 컴포넌트를 맡아 개발한다.
// 혼자할 프로젝트 개발할 경우 단계별로 작은 단위의 대표적인 기능을 만든 후 -> 확장해나가며 다른 기능들을 추가해나간다.
import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";

// 컴포넌트가 마운트(사용자에세 보여질때)가 되었을때 유튜브로 부터 데이터를 받아오는 부분 작성
function App() {
  const [videos, setVideos] = useState([]);

  // 컴포넌트가 마운트가 되었거나 업데이트 될때마다 호출되는 함수  useEffect
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAtrSZkopq--QXlpEYQ5SrM9Kg5TZlZMl0",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  // 두번째 인자 특정조건일때만 함수가 호출되게 하기 위해 설정하는 인자!
  // 맨 처음 마운트 되었을 때 한번만 호출하기 위해서 [] 일때만 함수호출하도록 조건을 정한것
  return (
    <div className={styles.app}>
      <SearchHeader />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
