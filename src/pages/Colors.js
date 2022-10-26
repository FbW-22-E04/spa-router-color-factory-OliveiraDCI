import { useState, useEffect, useContext } from "react";
import { Context } from "../utilities/ContextProvider";
import { useNavigate } from "react-router-dom";

function Colors() {
  const navigate = useNavigate();

  const { setAllColors } = useContext(Context);
  const [newColor, setNewColor] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (confirmed) {
      setAllColors((prevState) => [
        ...prevState,
        { color: newColor, value: newColor },
      ]);
      navigate("/");
    }
    return () => {}; // perhaps some side-effects cleanup?
  }, [newColor, confirmed]);

  const handleClick = () => setConfirmed(true);

  const handleInput = (e) => {
    setNewColor(e.target.value);
  };

  return (
    <div className="color-form">
      <label htmlFor="color-picker">
        Color selector:
        <input onInput={handleInput} type="color" name="color" id="color" />
      </label>

      <button
        className="btn-confirm"
        onClick={() =>
          newColor ? handleClick() : alert("Please, select a color first!")
        }
      >
        ADD TO LIST
      </button>
    </div>
  );
}

export default Colors;

//
//
//
//
//
//
//
//
//
/**
   { <div>Pick a new awesome color for our list,</div>
      <div>You'll need to login to use this feature:</div>
      <div>login: color-lover | password: 123</div> }
 */

/**
<div>
  { {allColors.map((item, idx) => (
    <div key={idx}>{item.color}</div>
  ))} }
</div>
  */
