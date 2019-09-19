import React from "react"
import Thermometer from "./Thermometer"
import { Animate } from "../src/Animate"
import { sequenceOf } from "../src/helpers"
import { after } from "rx-helper"

export default {
  title: "Thermometer"
}

const climbingTemp = sequenceOf(
  after(0.0, { temp: 86 }),
  after(1000, { temp: 92 }),
  after(1000, { temp: 96 }),
  after(1000, { temp: 99 }),
  after(1000, { temp: 100.5 }),
  after(1000, { temp: 102.2 })
).combineWith({ scale: "F" })

export const Healthy = () => <Thermometer scale="F" temp={98.6} />
export const Climbing = () => (
  <Animate component={Thermometer} propStream={climbingTemp} />
)
export const ClimbingLoop = () => (
  <Animate component={Thermometer} propStream={climbingTemp} loop={true} />
)
