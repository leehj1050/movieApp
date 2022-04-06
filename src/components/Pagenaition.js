import React from "react";
import styled from "styled-components";

const PageWrap = styled.div`
  display: flex;
  justify-content: center;
  ul {
    width: 30em;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    li {
      padding: 1em 1em;
      background-color: lightgray;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        background-color: gray;
        color: #fff;
      }
    }
  }
`;

export const Pagenaition = ({ totalPage, perPage, onClickPage }) => {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(totalPage / perPage); i++) {
    pageNum.push(i);
  }

  return (
    <PageWrap>
      <ul>
        {pageNum.map((page, idx) => {
          return (
            <li
              key={idx}
              onClick={() => {
                onClickPage(page);
                window.scrollTo(0, 0);
              }}
            >
              {page}
            </li>
          );
        })}
      </ul>
    </PageWrap>
  );
};
