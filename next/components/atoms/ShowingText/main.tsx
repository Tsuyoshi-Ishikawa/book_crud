import { memo } from "react";

type Props = {
  title: string;
  text: string;
}

const ShowingText = ({ title, text }: Props) => {
  return (
    <>
      <div>{title}:</div>
      <div>{text}</div>
    </>
  )
}

export default memo(ShowingText)
