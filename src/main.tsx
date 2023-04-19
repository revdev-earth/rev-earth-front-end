import ReactDOM from "react-dom/client"
import { StrictMode } from "react"
import { Provider } from "react-redux"

import { store } from "./redux-app"
import Router from "Router"

import "./style.css"

import "./i18"

// Dark mode is handled with tailwind dark:

const root = document.getElementById("root") as HTMLElement

ReactDOM.createRoot(root).render(
  <StrictMode>
    <Provider {...{ store }}>
      <Router />
    </Provider>
  </StrictMode>
)
