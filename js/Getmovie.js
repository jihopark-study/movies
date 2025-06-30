// 영화 API
export const Getmovie = async (keyWord) => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=48b22261&s=thor`);
    const result = await response.json();
    console.log(result.Search);
  } catch (error) {
    console.log(error);
  }
};
