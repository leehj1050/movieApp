import React, { useEffect, useState } from "react";
import { Movie } from "../components/Movie";
import { Pagenaition } from "../components/Pagenaition";

function Home() {
  let [loding, setloding] = useState(true);
  let [movies, setMovies] = useState([]);
  //page state
  let [perPage, setPerPage] = useState(4);
  let [totalPage, setTotalPage] = useState(20);
  let [currentPage, setCurrentPage] = useState(1);

  //page
  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const page = movies.slice(indexOfFirst, indexOfLast);

  // async 와 await을 이용한 api 호출
  const getMovies = async () => {
    let json = await (
      await fetch("https://yts.mx/api/v2/list_movies.json")
    ).json();

    setMovies(json.data.movies);
    setloding(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  //page click
  const onClickPage = (num) => {
    setCurrentPage(num);
  };

  return (
    <div className="App">
      {loding ? (
        <h1>Loding...</h1>
      ) : (
        <>
          {page.map((movie) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            );
          })}
        </>
      )}
      <Pagenaition
        totalPage={totalPage}
        perPage={perPage}
        onClickPage={onClickPage}
      />
    </div>
  );
}
export default Home;
