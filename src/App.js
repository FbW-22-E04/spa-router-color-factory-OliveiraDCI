import { useContext } from "react";
import { Context } from "./utilities/ContextProvider";
import { Link } from "react-router-dom";

function App() {
  const { allColors } = useContext(Context);
  console.log("from App -->", allColors);

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
          <div className="color-box" key={idx} color={item.value}>
            <Link to="/Colors/color" state={{ color: item.value }}>
              {item.value}
            </Link>
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
