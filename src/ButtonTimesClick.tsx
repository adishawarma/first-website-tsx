import { useState } from "react";

const ButtonTimesClick = () => {
    const [count, setCount] = useState(0);

    const setButtonClick = () => {
        setCount(count + 1);
    }
  return (
    <div>
        <button onClick={setButtonClick}>Button</button>
        <h3>Button is {count}</h3>
    </div>
  )
}

export default ButtonTimesClick