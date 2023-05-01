import { BallCanvas } from "./canvas"
import { Wrapper } from "../HOC"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <div className="flex flex-row gap-10 flex-wrap justify-center">
      {technologies.map((tech) => (
        <div className="w-28 h-28" key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  )
}

export default Wrapper(Tech,"")