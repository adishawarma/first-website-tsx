import { useState } from "react";

const Button = () => {
    const [clicked, setClicked] = useState("not clicked");

    const setButtonClick = () => {
        setClicked("clicked");
    }
  return (
    <div>
        <button onClick={setButtonClick}>Button</button>
        <h3>Button is {clicked}</h3>
    </div>
  )
}

export default Button