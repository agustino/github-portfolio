import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  padding: 10px 0;
  border-bottom: 1px solid lightGray;
`;

const List = ({ items, title }) => (
  <>
    <Title>{title}</Title>
    <ul className="profile__list">
      {items.map((item) => (
        <li className="profile__item" key={item.label}>
          <strong>{item.label}</strong>
          {item.value}
        </li>
      ))}
    </ul>
  </>
);

export default List;
