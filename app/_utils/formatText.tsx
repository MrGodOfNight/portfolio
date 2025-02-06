import React from "react"

export function formatText(text: string): React.ReactNode {
  return text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
  {index < text.split("\n").length - 1 && <br />}
  </React.Fragment>
))
}