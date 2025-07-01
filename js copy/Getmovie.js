import { RenderList } from "./RenderList.js";

export const Getmovie = async (keyWord, type = movie, year = null) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=48b22261&s=${keyWord}&${type}&y=${year}`
    );
    // s는 검색어는 뭘 쓸 것인지 체크
    const result = await response.json();
    console.log(result.Search);
    RenderList(result.Search);
  } catch (error) {
    console.log(error);
  }
};
