import { useEffect } from "react"

export default () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const buttonClass = `  bg-green-300  text-slate-950 `

  return (
    <div className="p-10 pt-16 flex flex-col gap-8">
      <h2 className="text-xl ">Donaciones</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam vitae
        eligendi sed quis? Facere, debitis consequatur deleniti omnis
        praesentium veritatis pariatur assumenda et blanditiis, harum culpa
        alias! Qui, perferendis hic.
      </p>
      <div className="flex flex-col items-center gap-4">
        <button className={buttonClass + ` bg-green-300 text-slate-950  `}>
          que quieres donar?
        </button>
        <button className={buttonClass}>como lo quieres donar?</button>
        <button className={buttonClass}>lo traes o lo llevamos?</button>
        <button className={buttonClass}>lo pagas o lo pagamos?</button>
        <button className={buttonClass}>logistica</button>
      </div>
    </div>
  )
}
