import { BehaviorSubject } from "rxjs"
import React, { useMemo } from "react"

/**
A component that exposes a knob's present and future
values as an Observable.

Example:
```
<WithObservableKnob
  knob={[boolean, 'Online', true]}
  render={knobStates => (
    <Connectivity networkStates={knobStates} />
  )}
/>
```
*/
export function WithObservableKnob({
  render,
  knob: [type, name, value, options = {}]
}): React.ReactElement {
  // Get the current value. Registers our dependency on it.
  const knobValue = type.call(type, name, value, options)

  // Set up the Observable and the way to push the next value
  const [knobStates, nextKnobValue] = useMemo(() => {
    const s = new BehaviorSubject(knobValue)
    return [s.asObservable(), (x: any) => s.next(x)]
  }, [])

  // pushes the next state
  nextKnobValue(knobValue)

  // Compute and return the rendered element once
  const elem = useMemo(() => {
    return render(knobStates)
  }, [])

  return elem
}
