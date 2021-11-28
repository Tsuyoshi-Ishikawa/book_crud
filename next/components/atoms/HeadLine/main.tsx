import { memo } from "react";

type Props = {
  text: string;
}

const HeadLine = ({ text }: Props) => {
  console.log("HeadLine rendering")
  return (
    <>
      <h1 className="border-solid">{ text }</h1>
    </>
  )
}

export default memo(HeadLine)
