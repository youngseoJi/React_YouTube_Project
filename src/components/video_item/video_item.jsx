import React, { memo } from "react";
import styles from "./video_item.module.css";
// props로 가져왔을때 그 안의 것들을 블러오기위해
// props.video.snippet 으로 계속원래 써야하지만,
// 구조분해할당 : props 내의 video를 바로 사용할때는 {video}
// 또 video내의 snippet 가져올경우¡

// memo 설정 : 업데이트가 되지 않는다면(props가 바뀌지 않는다면), 재 렌더링 되지 않도록
const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display === "list" ? styles.list : styles.grid;
    return (
      // 해당 비디오를 클릭할 경우 onVideoClick 기능 실행! (선택된 비디오 크게 보여주는)
      // css 나눠서 설정 : className 2가지로 구분하기
      // 보여지는 display 타입 css 적용하는 방법
      // display 타입이 list 인 경우? styles.list적용, 아닌경우 grid쓰게 설정
      <li
        className={`${styles.container} ${displayType}`}
        onClick={() => onVideoClick(video)}
      >
        <div className={styles.video}>
          <img
            className={styles.thumbnail}
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
  }
);

export default VideoItem;
