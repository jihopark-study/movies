import { Getmovie } from "./Getmovie.js";
export const Search = () => {
  const search = document.querySelector("#search");

  const year = new Date().getFullYear();

  search.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = search.querySelector("input").value;
    console.log(value);

    Getmovie(value);
  });
};
