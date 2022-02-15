import React from "react";
import styles from "./video_item.module.css";

// props로 가져왔을때 그 안의 것들을 블러오기위해
// props.video.snippet 으로 계속원래 써야하지만,
// 구조분해할당 : props 내의 video를 바로 사용할때는 {video}
// 또 video내의 snippet 가져올경우
const VideoItem = ({ video: { snippet } }) => (
  <li className={styles.container}>
    <div className={styles.video}>
      <img
        className={styles.thumbnails}
        src={snippet.thumbnails.medium.url}
        alt="video thumbnail"
      />
      <div className={styles.metadata}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </div>
  </li>
);

export default VideoItem;
