import React from "react"

export function getInputEventValue(callBack: Function) {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    callBack(() => ({
      value: e.target.value,
    }))
  }
}

export function getTextareaEventValue(callBack: Function) {
  return (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    callBack(e.target.value)
  }
}
