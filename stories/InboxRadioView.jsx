import React from "react"
import { Color as InkColor, Box as InkBox, Text } from "ink"
import { randomId } from "rx-helper"
import InkSpinner from "ink-spinner"

const useInk = false
const Color = props => {
  const c = useInk ? InkColor : "span"
  return React.createElement(c, props, props.children)
}
const Box = props => {
  const c = useInk ? InkBox : "div"
  return React.createElement(c, props, props.children)
}
const Spinner = props => {
  return useInk ? <InkSpinner {...props} /> : <span>⌛️</span>
}

export default function InboxRadioView({ nowPlaying, queue, logs = [] }) {
  return (
    <Box key={randomId()} marginTop={1} flexDirection="column">
      <Box key={randomId()}>
        <Color rgb={[90, 90, 90]} key={randomId()}>
          Now Playing{" "}
        </Color>
        <Color rgb={nowPlaying.title === "---" ? [90, 90, 90] : null}>
          {nowPlaying.title}
        </Color>
      </Box>
      <Box key={randomId()} width={56} flexDirection="column">
        <Text key={randomId()} underline={true}>
          Queue
        </Text>
        {queue.map(track => {
          return (
            <Box key={randomId()}>
              <Color key={randomId()} width={6}>
                {track.status === "downloading" && <Spinner key={randomId()} />}
                {track.status === "done" && "✔ "}
              </Color>
              <Color key={randomId()} width={50}>
                {track.name}
              </Color>
            </Box>
          )
        })}
        {Array.from(new Array(Math.max(0, 4 - queue.length))).map(() => {
          return <Box key={randomId()} minHeight={1} />
        })}
      </Box>
      <Box key={randomId()} minHeight={1} flexDirection="column">
        <Text key={randomId()} underline={true}>
          Logs
        </Text>
        {logs.map(log => (
          <Box key={randomId()}>{log.substr(0, 80)}</Box>
        ))}
      </Box>
    </Box>
  )
}
