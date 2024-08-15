import { useState } from "react";

const TrueOrFalse = () => {
    const [value, setValue] = useState("false");

    const setButtonClick = () => {
        if (value === "false" ) {
            setValue("true");
        } else {
            setValue("false");
        };
    }
  return (
    <div>
        <button onClick={setButtonClick}>Button</button>
        <h3>Button is {value}</h3>
    </div>
  )
}

export default TrueOrFalse