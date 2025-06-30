export const RenderList = (array) => {
  const list = document.querySelector(".movie-list");

  if (!list) return;

  list.innerHTML = array
    .map(({ Poster, Title, Type, Year, imdbID }) => {
      return /*html*/ `
            <li>
                <img src=${Poster ? Poster : "/images/noimage.png"} alt="">
                <strong>${Title}</strong>
                <div>종류 :${Type} </div>
                <div>개봉연도 :${Year} </div>
            </li>
        `;
    })
    .join("");
};
