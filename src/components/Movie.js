import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  border: 3px solid gray;
  width: 50em;
  margin: 3em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Movie = ({ id, coverImg, title, summary, genres }) => {
  return (
    <Link
      to={`/movie/${id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Container>
        <img src={coverImg} alt={title} />
        <h2>{title}</h2>
        {summary.length > 150 ? (
          <p>{summary.slice(0, 151)}...</p>
        ) : (
          <p>{summary}</p>
        )}
        <ul>
          {genres &&
            genres.map((gen, idx) => {
              return <li key={idx}>{gen}</li>;
            })}
        </ul>
      </Container>
    </Link>
  );
};

// Movie.propTypes = {
//   id: PropTypes.number.isRequired,
//   coverImg: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
