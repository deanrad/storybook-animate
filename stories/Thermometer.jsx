import React from "react"

export default function Thermometer(props) {
  const { scale = "C", temp = 0 } = props
  const width = ((temp - 80) * 360) / 20
  const scaledTemp = scale === "C" ? Math.round((temp - 32) / 0.18) / 10 : temp
  return (
    <div style={{ position: "absolute" }}>
      <div
        style={{
          position: "relative",
          top: 56,
          left: 80,
          height: 28,
          backgroundColor: "red",
          width: width,
          transition: "width 1000ms ease-in-out"
        }}
      >
        <div
          style={{
            position: "relative",
            top: 56,
            left: Math.max(width - 10, 100),
            fontFamily: "sans-serif",
            fontSize: 18,
            transition: "left 1000ms ease-in-out"
          }}
        >
          {scaledTemp}
          {scale === "C" ? "℃" : "℉"}
        </div>
      </div>
      <svg
        style={{ position: "relative" }}
        width="538px"
        height="85px"
        viewBox="0 0 538 85"
        version="1.1"
      >
        <g id="Page-1" fill="none">
          <g id="Group" transform="translate(2.000000, 2.000000)">
            <path
              d="M78.3270398,26 L519,26 C527.284271,26 534,32.7157288 534,41 C534,49.2842712 527.284271,56 519,56 L77.9280487,56 C71.8432285,70.676642 57.377189,81 40.5,81 C18.1324676,81 0,62.8675324 0,40.5 C0,18.1324676 18.1324676,0 40.5,0 C57.7579789,0 72.4947784,10.7944528 78.3270398,26 Z"
              id="Combined-Shape"
              stroke="#000000"
              strokeWidth="4"
            ></path>
            <circle
              id="bulb"
              fill="#FF0000"
              cx="40.5"
              cy="40.5"
              r="39"
            ></circle>
          </g>
        </g>
      </svg>{" "}
    </div>
  )
}
