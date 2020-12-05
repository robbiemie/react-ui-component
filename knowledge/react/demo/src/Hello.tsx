import React from "react"

interface HelloProps {
  text: string;
}

export const Hello = (props: HelloProps) => {
  return (
    <div>{props.text}</div>
  )
}
// 等价于
export const Hello2: React.FunctionComponent<HelloProps> = (props) => {
  return (
  <div>{props.text}</div>
  )
}
// 等价于
export const Hello3: React.FC<HelloProps> = (props) => {
  return (
  <div>{props}</div>
  )
}