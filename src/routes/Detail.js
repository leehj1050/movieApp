import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  let [loding, setloding] = useState(true);
  let [movies, setMovies] = useState([]);

  const { id } = useParams();

  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setloding(false);
    setMovies(json.data.movie);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <>
      {loding ? (
        <h1>Loding...</h1>
      ) : (
        <div>
          <h1>{movies.title}</h1>
          <img src={movies.medium_cover_image} alt="영화이미지" />
          <p>{movies.description_intro}</p>
          <ul>
            {movies.genres &&
              movies.genres.map((gen, idx) => {
                return <li key={idx}>{gen}</li>;
              })}
          </ul>
        </div>
      )}
    </>
  );
}
export default Detail;
