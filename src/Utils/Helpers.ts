import React from "react"

export function getInputEventValue(callBack: Function) {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    callBack(e.target.value)
  }
}
