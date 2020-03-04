import React from "react"
import Thermometer from "./Thermometer"
import { Animate } from "../src/Animate"
import { sequenceOf } from "../src/helpers"
import { after } from "rx-helper"
import { map } from "rxjs/operators"
import { withKnobs, number, select } from "@storybook/addon-knobs"

import { WithObservableKnob } from "../src/WithObservableKnob"

export default {
  title: "Thermometer",
  decorators: [withKnobs]
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
export const KnobControlsScale = () => (
  <Animate
    component={Thermometer}
    propStream={climbingTemp.pipe(
      map(({ temp }) => ({
        temp,
        scale: select("Scale", { C: "C", F: "F" }, "F")
      }))
    )}
  />
)

export const KnobControlsTemperature = () => {
  return (
    <WithObservableKnob
      knob={[number, "Temp", 98]}
      render={knobTemps => (
        <Animate
          component={Thermometer}
          propStream={knobTemps.pipe(map(v => ({ temp: v, scale: "F" })))}
        />
      )}
    />
  )
}

export const KnobControlsScaleAndTemp = () => {
  return (
    <>
      <div>
        <WithObservableKnob
          knob={[number, "Temp", 98]}
          render={knobTemps => (
            <Animate
              component={Thermometer}
              propStream={knobTemps.pipe(
                map(v => ({
                  temp: v,
                  scale: select("Scale", { C: "C", F: "F" }, "F")
                }))
              )}
            />
          )}
        />
      </div>
      <div>
        See the Knobs pane for control of this thermometer.
        <p>
          Use Case: Components that take Observables in their props (such as
          Animate) can give Storybook consumers control of those Observables
          using WithObservableKnob.
        </p>
      </div>
    </>
  )
}
