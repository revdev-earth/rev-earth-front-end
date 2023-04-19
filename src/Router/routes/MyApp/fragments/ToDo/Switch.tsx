export default function ({ label, checked, onChange }: any) {
  const handleToggle = () => {
    if (onChange) {
      onChange(!checked)
    }
  }

  const trackClassName = `toggle__line ${
    checked ? "bg-green-400" : "bg-gray-400"
  }`
  const thumbClassName = `toggle__dot ${checked && "bg-white translate-x-full"}`

  return (
    <div className="flex items-center ">
      <label className="flex items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleToggle}
            className="hidden"
          />
          <div
            className={
              trackClassName +
              " w-10 h-6 rounded-full shadow-inner transition-colors cursor-pointer"
            }
          ></div>
          <div
            className={
              thumbClassName +
              " absolute w-4 h-4 bg-white rounded-full shadow inset-y-1 left-1 transition-transform cursor-pointer"
            }
          ></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium dark:text-neutral-100">
          {label}
        </div>
      </label>
    </div>
  )
}
