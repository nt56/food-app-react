import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);

  const { name, location, contact } = props;

  return (
    <div className="user-card">
      <h2>Count : {count}</h2>
      <h3>Name : {name}</h3>
      <h3>Location : {location}</h3>
      <h3>contact : {contact}</h3>
    </div>
  );
};

export default User;
