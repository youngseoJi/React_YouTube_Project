import React, { memo, useRef } from "react";
import styles from "./search_header.module.css";

//! 검색 기능(컴포넌트) 구현
const SearchHeader = memo(({ onSearch }) => {
  // javascript에서 특정 Dom을 선택하는 역할
  // useRef(); 사용하여 검색한 값을 저장한다.
  const inputRef = useRef();
  const handleSearch = () => {
    // 현재 검색창에 입력한 값을 저장한다.
    const value = inputRef.current.value;
    console.log(value);
    onSearch(value);
  };
  const onClick = () => {
    console.log("onClick");
  };

  const onKeyPress = (event) => {
    // 누르는 키가 엔터일 경우에 handleSearch()함수를 실행한다.
    // 검색창에 입력한 value 값이 저장된다.
    if (event.key === "Enter") {
      handleSearch();
    }
    // console.log("onKeyPress");
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      {/* 검색 하는 기능 구현 => 검색 후 엔터를 누르면 onKeyPress 이벤트 발생 => 중괄호내의 {함수}실행*/}
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search"
        onKeyPress={onKeyPress}
      ></input>
      {/* 검색 기능 버튼 구현 => onClick 클릭했을 떄 발생하는 이벤트를 발생한다. => 중괄호내의 {함수}실행*/}
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonLogo}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
});
export default SearchHeader;
