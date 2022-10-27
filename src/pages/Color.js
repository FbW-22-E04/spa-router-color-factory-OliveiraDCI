import { useLocation, Link } from "react-router-dom";

function Color() {
  const location = useLocation();
  const { color } = location.state;

  return (
    <div className="flex-wrap-col">
      <div className="color-glory" style={{ backgroundColor: color }}>
        <div>
          The color {color} in all its glory{" "}
          <span className="light-bulb">💡</span>{" "}
        </div>
      </div>
      <Link to="/">
        <button className="btn-back">BACK</button>
      </Link>
    </div>
  );
}

export default Color;
