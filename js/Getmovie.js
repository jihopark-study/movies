// API 연동 및 검색어 받아오기
export const Getmovie = async (title, person, genre) => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=48b22261`);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
