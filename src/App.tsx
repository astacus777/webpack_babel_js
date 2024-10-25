import "./css/styles.css";
import IMAGE from "./img/pic1.png";

export const App = () => {
  return (
    <>
      <h1 className="open">Hello Yuou</h1>
      <svg width="400" height="180">
        <rect
          x="50"
          y="20"
          rx="20"
          ry="20"
          width="150"
          height="150"
          style={{
            fill: "red",
            stroke: "black",
            strokeWidth: 5,
            opacity: 0.5,
          }}
        />
      </svg>
      <svg width="300" height="200">
        <polygon
          points="100,10 40,198 190,78 10,78 160,198"
          style={{
            fill: "lime",
            stroke: "purple",
            strokeWidth: 5,
            fillRule: "evenodd",
          }}
        />
      </svg>
      <img src={IMAGE} alt="clown" width="600" />
    </>
  );
};
