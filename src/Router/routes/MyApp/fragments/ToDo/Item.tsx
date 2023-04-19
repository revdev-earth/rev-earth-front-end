import { useDispatch } from "redux-app"
import { ToDo, completeToDo, deleteToDo } from "redux-app/todos"

export const Item = (todo: ToDo) => {
  const dispatch = useDispatch()

  const completeIt = () => dispatch(completeToDo(todo.id))
  const deleteIt = () => dispatch(deleteToDo(todo.id))

  return (
    <div
      key={todo.id}
      className={`to-do-item ${todo.completed && "to-do-complete"}`}
    >
      <input
        className="to-do-checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={completeIt}
      />
      <span className="todoMessage">{todo.message}</span>
      <button type="button" className="todoDelete" onClick={deleteIt}>
        X
      </button>
    </div>
  )
}
