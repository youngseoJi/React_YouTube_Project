// import axios from "axios";

class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }
  // constructor(key) {
  //   // 유튜브와 통신하는 베이스 유튜브 클라이언트 생성
  //   this.youtube = axios.create({
  //     baseURL: "https://www.googleapis.com/youtube/v3",
  //     params: { key: key },
  //   });
  // }
  // json으로 자동으로 변환해줌, 예전 브라우저에서도 호환이되다.
  async mostPopular() {
    const res = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return res.data.items;
    //  fetch는 json으로 변환해줘야한다. or prams를 url로 따로해야하서 가독성 떨어짐
    // const res = await fetch(
    //   `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
    //   this.getRequestOptions
    // );
    // const data = await res.json();
    // return data.items;
  }

  async search(query) {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const data = await res.json();
    return data.items.map((item) => ({ ...item, id: item.id }));
  }
}

export default Youtube;
