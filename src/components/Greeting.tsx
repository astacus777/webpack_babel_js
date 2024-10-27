import React, { useState } from "react";
import IMAGE from "../img/pic1.png";

export const Greeting = () => {
  const [userText, setUserText] = useState("");
  const [display, setDisplay] = useState("");

  const handleDisplay = () => {
    setDisplay(userText);
  };

  return (
    <>
      <div className="container-home">
        <input
          type="text"
          placeholder="write your name"
          name="name"
          id="user_input"
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
        />
        <input
          type="submit"
          name=""
          id="btn-submit"
          className="btn-primary"
          onClick={handleDisplay}
        />
        <p className="text"></p>
        <h1 className="open">Hello {display}</h1>
        <img src={IMAGE} alt="clown"  className="clown-pic" />
      </div>
    </>
  );
};
