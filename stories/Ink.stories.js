import React from "react"
import InboxRadioView from "./InboxRadioView"

export default {
  title: "Inbox Radio (Ink)"
}

export const exampleView = () => {
  const props = {
    nowPlaying: { status: "downloading", title: "Dave Grohl - Play" },
    queue: [
      { status: "downloading", name: "Edgar Winter - Frankenstien" },
      { status: "done", name: "Santana - Black Magic Woman" }
    ]
  }
  return <InboxRadioView {...props} />
}
