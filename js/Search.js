import { Getmovie } from "./Getmovie.js";

// 검색
export const Search = () => {
  const search = document.querySelector("#search");

  search.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = search.querySelector("input").value;

    // 검색 키워드 전달
    Getmovie(value);
  });
};
