import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";
// app 컴포넌트에서 videos 목록, 비디오 클릭시 선택된 비디오 실행하는 함수(기능) 전달받음
const VideoList = ({ videos, onVideoClick, display }) => (
  <ul className={styles.videos}>
    {/* 각 비디오 구현 컴포넌트에 기능, 함수 전달 */}
    {videos.map((video) => (
      <VideoItem
        key={video.id}
        video={video}
        onVideoClick={onVideoClick}
        display={display}
      />
    ))}
  </ul>
);

export default VideoList;
