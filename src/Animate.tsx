import React, { useEffect, useState } from "react"
// @ts-ignore
import { after } from "rx-helper"

export const Animate = ({
  propStream = after(0, {}),
  component,
  loop = false
}) => {
  const [props, setProps] = useState({})
  const [renderNum, reRender] = useState(0)
  useEffect(() => {
    let sub
    function run() {
      sub = propStream.subscribe({
        next(newProps) {
          setProps(newProps)
        },
        complete() {
          loop && setTimeout(run, 500)
        }
      })
    }
    run()
    return () => sub && sub.unsubscribe()
  }, [renderNum])
  return (
    <div onClick={() => reRender(renderNum + 1)}>
      {React.createElement(component, props)}
    </div>
  )
}
