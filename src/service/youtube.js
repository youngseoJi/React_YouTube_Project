// 리액트느 순수 vue 보여지는 것을 만드는 것이기에,
// 컴포넌트는 다른 것 네트워크 통신같은 기능을 있으면 최악! 테스트 할때마다 통신이 일어난다.
// 이렇게 따로 빼서 구성하기!

class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  // mostPopular 함수를 호출하면 (fetch) 네트워크 통신을 해서 받아온 데이터를  items로 변환하여 리턴하는 API 생성
  async mostPopular() {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    );
    const data = await res.json();
    return data.items;
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
