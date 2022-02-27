// 협업하는 경우 검색부분, 페이지 목록보는 부분 등 각자 컴포넌트를 맡아 개발한다.
//  혼자할 프로젝트 개발할 경우 단계별로 작은 단위의 대표적인 기능을 만든 후 -> 확장해나가며 다른 기능들을 추가해나간다.
import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  // 컴포넌트가 마운트(사용자에세 보여질때)가 되었을때 유튜브로 부터 데이터를 받아오는 부분 작성

  const [videos, setVideos] = useState([]);
  // 선택한 비디오를 보여주기 위한, 초기상태 null / 선택하면 해당 비디오를 보여준다.
  const [selectedVideo, setSelectedVideo] = useState(null);
  // 검색중일때 띄울 화면
  // const [isLoding, setIsLoding] = useState(false);

  // 선택한 비디오로 변경한다.
  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    // 처음엔 항상 초기화 시키기 - 기본브라우저화면
    setSelectedVideo(null);

    youtube.search(query).then((videos) => {
      setVideos(videos);
    });
  };
  // 컴포넌트가 마운트가 되었거나 업데이트 될때마다 호출되는 함수  useEffect
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);
  // 두번째 인자 특정조건일때만 함수가 호출되게 하기 위해 설정하는 인자!
  // 맨 처음 마운트 되었을 때 한번만 호출하기 위해서 [] 일때만 함수호출하도록 조건을 정한것

  return (
    <div className={styles.app}>
      {/* 검색 구현 컴포넌트에 search 함수전달 */}
      {/* 선택된 비디오가 있으면 VideoDetail 컴포넌트를 보이게 한다. (컴포넌트에 선택된 비디오를 전달한다.)*/}
      <SearchHeader onSearch={search} />

      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          {/* 비디오 리스트 컴포넌트에 videos 비디오 들을 전달한다. */}
          {/* 비디오 리스트에 클릭되면 선택된 비디오를 보여주는 selectVideo 함수, 기능 전달*/}
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
