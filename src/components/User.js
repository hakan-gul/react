import React from "react";

function User(props) {
    console.log(props);
  return (
    <div>
      User
      <div>isim: {props.name}</div>
      <div>yaş: {props.city}</div>
      <div>şehir: {props.age}</div>

      <hr />
    </div>
  );
}

export default User;
