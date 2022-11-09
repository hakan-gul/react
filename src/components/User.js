import React from "react";
import PropTypes from "prop-types";

function User({ title, data, friends }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>isim: {data.name}</div>
      <div>yaş: {data.age}</div>
      <div>şehir: {data.city}</div>
      <h3>Arkadaşlar</h3>
      {friends.map((friend, i) => (
        <div key={i}>{friend}</div>
      ))}
      <hr />
    </div>
  );
}

User.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.exact({
    name: PropTypes.string,
    age: PropTypes.number,
    city: PropTypes.string,
  }),
  friends: PropTypes.array,
};

User.defaultProps = {
  title: "Kişi",
};

export default User;
