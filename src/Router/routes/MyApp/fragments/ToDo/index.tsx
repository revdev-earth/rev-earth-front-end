import { Form } from "./Form"
import { List } from "./List"

import "./style.css"

export const ToDo = () => {
  return (
    <div className="to-do dark:text-neutral-100 font-bold">
      To Do
      <Form />
      <List />
    </div>
  )
}
