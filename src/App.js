import { useContext } from "react";
import { Context } from "./utilities/ContextProvider";
import { Link } from "react-router-dom";

function App() {
  const { allColors, setAllColors } = useContext(Context);

  const handleClick = (color) => {
    setAllColors((prevState) => prevState.filter((el) => el.value !== color));
  };

  return (
    <main>
      <h2 className="pick">
        <span>P</span>
        <span>I</span>
        <span>C</span>
        <span>K</span>
        <span> </span>
        <span>A</span>
        <span> </span>
        <span>C</span>
        <span>O</span>
        <span>L</span>
        <span>O</span>
        <span>R</span>
        <span> </span>
        <span>!</span>
      </h2>
      <div>
        {allColors.map((item, idx) => (
          <div
            className="color-box"
            style={{ backgroundColor: item.value }}
            key={idx}
            color={item.value}
          >
            <Link to="/Colors/color" state={{ color: item.value }}>
              {item.value}
            </Link>
            <div className="delete" onClick={() => handleClick(item.value)}>
              <div>X</div>
            </div>
          </div>
        ))}
      </div>
      <div className="more-colors">
        <Link to="/Colors">
          <button className="btn-new-color">ADD MORE COLORS</button>
        </Link>
      </div>
    </main>
  );
}

export default App;
