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
    return () => {}; // does it need some side-effects cleanup?
  }, [newColor, confirmed]);

  const handleClick = () => setConfirmed(true);

  const handleInput = (e) => {
    setNewColor(e.target.value);
  };

  return (
    <div className="flex-wrap-col">
      <div className="color-form">
        <label htmlFor="color-picker">
          Color selector:
          <input onInput={handleInput} type="color" name="color" id="color" />
        </label>
      </div>
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
