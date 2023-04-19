import { useRef, useEffect } from "react"

interface Props {
  color: string
}

export default function ColorDetector({ color }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const div = divRef.current
    if (canvas === null) return
    if (div === null) return
    const ctx = canvas.getContext("2d")
    if (ctx === null) return
    ctx.fillStyle = color
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const pixels = imageData.data
    const totalPixels = canvas.width * canvas.height
    let totalBrightness = 0
    for (let i = 0; i < totalPixels; i++) {
      const r = pixels[i * 4]
      const g = pixels[i * 4 + 1]
      const b = pixels[i * 4 + 2]
      const brightness = (r + g + b) / 3
      totalBrightness += brightness
    }
    const averageBrightness = totalBrightness / totalPixels
    if (averageBrightness > 127) {
      div.style.backgroundColor = "white" // color claro
    } else {
      div.style.backgroundColor = "black" // color oscuro
    }
  }, [color])

  return (
    <div ref={divRef}>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}
