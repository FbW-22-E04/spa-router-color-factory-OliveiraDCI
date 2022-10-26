import { useLocation, Link } from "react-router-dom";

function Color() {
  const location = useLocation();
  const { color } = location.state;

  return (
    <div className="color-glory" style={{ backgroundColor: color }}>
      <div>Here, the color {color} in all its glory ! </div>
      <Link to="/">
        <button>BACK</button>
      </Link>
    </div>
  );
}

export default Color;
