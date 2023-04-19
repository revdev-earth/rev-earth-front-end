import { ToDo } from "./fragments/ToDo"
import { Fancy } from "./fragments/Fancy"

export default function () {
  return (
    <div className="MyApp">
      <Fancy />
      <ToDo />
    </div>
  )
}
