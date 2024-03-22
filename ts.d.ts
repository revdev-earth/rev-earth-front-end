declare module "react-reveal/Fade" {
  interface FadeProps {
    duration?: number
    delay?: number
    cascade?: boolean
    fraction?: number
    collapse?: boolean
    when?: boolean
    top?: boolean
    bottom?: boolean
    left?: boolean
    right?: boolean
    children: React.ReactNode
  }

  const Fade: FC<FadeProps>
  export default Fade
}
