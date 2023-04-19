import { useDispatch, useSelector } from "redux-app"
import { ToDo, completeToDo, deleteToDo, sort } from "redux-app/todos"

import Switch from "./Switch"

export const Item = ({ todo }: { todo: ToDo }) => {
  const dispatch = useDispatch()

  const completeIt = () => dispatch(completeToDo(todo.id))
  const deleteIt = () => dispatch(deleteToDo(todo.id))

  return (
    <div
      key={todo.id}
      className={`to-do-item ${
        todo.completed && "to-do-complete"
      } justify-between`}
    >
      <Switch
        {...{
          checked: todo.completed,
          onChange: completeIt,
          ariaText: "complete task",
          label: todo.message
        }}
      />
      <button
        type="button"
        className="todoDelete hover:border-red-500 bg-red-100 hover:bg-red-300"
        onClick={deleteIt}
      >
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="512"
          height="512"
          x="0"
          y="0"
          viewBox="0 0 365.717 365"
        >
          <g>
            <g fill="#f44336">
              <path
                d="M356.34 296.348 69.727 9.734c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.816c-12.5 12.504-12.5 32.77 0 45.25L295.988 356.68c12.504 12.5 32.77 12.5 45.25 0l15.082-15.082c12.524-12.48 12.524-32.75.02-45.25zm0 0"
                fill="#f44336"
                data-original="#f44336"
              ></path>
              <path
                d="M295.988 9.734 9.375 296.348c-12.5 12.5-12.5 32.77 0 45.25l15.082 15.082c12.504 12.5 32.77 12.5 45.25 0L356.34 70.086c12.504-12.5 12.504-32.766 0-45.246L341.258 9.758c-12.5-12.524-32.766-12.524-45.27-.024zm0 0"
                fill="#f44336"
                data-original="#f44336"
              ></path>
            </g>
          </g>
        </svg>
      </button>
    </div>
  )
}

export const List = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const sortList = () => dispatch(sort())

  return (
    <div className="to-do-list pr-16">
      {todos.length > 2 && <button onClick={sortList}>Sort them!</button>}
      {todos.map((todo) => (
        <Item key={todo.id} {...{ todo }} />
      ))}
    </div>
  )
}
