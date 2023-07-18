import React, { TextareaHTMLAttributes } from "react"

interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = (props: ITextarea) => {
  return <textarea {...props} />
}
