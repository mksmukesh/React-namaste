
import { useState } from "react";
const UserCard = (props) => {

  const [count]=useState(0)

    return (
      <div className="usercard-container">
        <h2>Count:{count}</h2>
        <h2>{props.name}</h2>
        <h3>Location:Delhi</h3>
        <h4>Contact:mks@google.com</h4>
        </div>
    );
  };
  
  export default UserCard;