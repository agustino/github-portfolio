import React from "react";

const List = ({ items }) => (
  <ul className="profile__list">
    {items.map(item => (
      <li className="profile__item" key={item.label}>
        <strong>{item.label}</strong>
        {item.value}
      </li>
    ))}
  </ul>
);

export default List;
