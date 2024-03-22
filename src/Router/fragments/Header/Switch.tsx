import { useState } from "react"

interface Props {
  label?: string
  checked?: boolean
  onChange?: (newChecked: boolean) => void
}

export default ({ label = "theme", checked = false, onChange }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked)

  const handleToggle = () => {
    setIsChecked(!isChecked)
    onChange && onChange(!isChecked)
  }

  return (
    <div className="flex items-center">
      <label className={`flex items-center cursor-pointer`}>
        <div className="relative cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
            className="hidden"
          />
          <div
            className={`toggle__dot 
              absolute w-4 h-4 rounded-full shadow inset-y-1 left-1 transition-transform cursor-pointer 
              bg-orange-400/50 dark:bg-sky-300 
              dark:border-0 dark:border-transparent
              border-2 border-indigo-400/75
              `}
          />
          <div
            className={`toggle__line 
              w-6 h-6 rounded-full shadow-inner transition-colors cursor-pointer 
              bg-yellow-200/30 dark:bg-zinc-950 
              dark:border-2 dark:border-sky-300/75 `}
          />
        </div>
        <div
          className={`toggle__label 
            ml-3 font-medium
            text-black dark:text-white 
            cursor-pointer    `}
        >
          {label}
        </div>
      </label>
    </div>
  )
}
