import { useEffect } from "react"
import theme from "theme"
import "./background.css"

const getStars = () => {
  let stars = ""
  const { width, height } = window.screen
  const count = Math.floor(Math.sqrt(width * height) / 14)

  for (let index = 0; index < count; index++) {
    stars += `${Math.random() * width}px ${Math.random() * height}px ${
      theme.isDark() ? "#06b6d480" : "#4ade8080"
    }, `
  }

  return stars.slice(0, stars.length - 2)
}

const meteorMaker = () => {
  const left = Math.random() * window.outerWidth
  const top = Math.random() * window.outerHeight
  const duration = Math.random() * 50000 + 3000
  const div = document.createElement("div")

  div.className = "meteor bg-gradient-to-r from-cyan-500 to-blue-500"
  div.style.top = `${top - 300}px`
  div.style.left = `${left}px`

  document.body.append(div)

  div.animate(
    [
      { offset: 0, opacity: 1, marginTop: "-300px", marginRight: "-800px" },
      { offset: 0.12, opacity: 0 },
      { offset: 0.15, opacity: 0, marginTop: "300px", marginLeft: "-600px" },
      { offset: 1, opacity: 0, width: 0 },
    ],
    { duration: duration, easing: "linear" }
  )

  setTimeout(() => {
    div.remove()
  }, 4000)
}

const BackgroundStars = () => {
  const stars = getStars()

  useEffect(() => {
    meteorMaker()

    const intervalId = setInterval(() => {
      meteorMaker()
    }, 1000)

    return () => clearInterval(intervalId)
  }, [theme])

  return <div className="stars" style={{ boxShadow: stars }} />
}

export default BackgroundStars
