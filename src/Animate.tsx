import React, { useEffect, useState } from "react"
// @ts-ignore
import { after, concat } from "rx-helper"
import { repeat } from "rxjs/operators"

export const Animate = ({
  propStream = after(0, {}),
  component,
  loop = false
}) => {
  const [props, setProps] = useState({})

  const propChanges = loop
    ? concat(propStream, after(1000)).pipe(repeat())
    : propStream
  useEffect(() => {
    let sub = propChanges.subscribe((newProps = {}) => setProps(newProps))
    return () => sub && sub.unsubscribe()
  }, [])
  return <div>{React.createElement(component, props)}</div>
}
