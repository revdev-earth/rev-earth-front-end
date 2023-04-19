import reactLogo from "assets/react.svg"
import viteLogo from "/vite.svg"

import "./style.css"

export const Fancy = () => (
  <div className="Fancy">
    <div className="flex justify-center">
      <img src={viteLogo} className="logo cursor-pointer" alt="Vite logo" />
      <img
        src={reactLogo}
        className="logo react cursor-pointer"
        alt="React logo"
      />
    </div>
  </div>
)
