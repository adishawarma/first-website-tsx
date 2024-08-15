import Custom from "./custom"
import Button from "./Button"
import ButtonTimesClick from "./ButtonTimesClick"
import TrueOrFalse from "./TrueOrFalse"
import { fruits } from "./data"
import Fruit from "./Fruit"

function App() {

  return (
    <div>
      <Custom name = {"Aditya"}/>
      <Custom name = {"Aayush"}/>
      <Custom name = {"Ak"}/>
      <Custom name = {"Kartik"}/>
      <Button />
      <ButtonTimesClick />
      <TrueOrFalse />

      {fruits.map((fruit, index) => (
        <Fruit fruitName={fruit} />
      ))}
    </div>
  )
}

export default App
