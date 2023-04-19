import { useState } from "react"
import { useDispatch } from "redux-app"
import todos from "redux-app/todos"

export const Form = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState("")
  const isInputEmpty = inputValue.length === 0

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isInputEmpty) return
    dispatch(todos.actions.addToDo(inputValue))
    setInputValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-zinc-950 font-medium"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="bg-teal-300 cursor-pointer rounded-md"
        type="submit"
        disabled={isInputEmpty}
        children="+"
      />
    </form>
  )
}
