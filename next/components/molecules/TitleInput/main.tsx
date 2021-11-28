import { useState, memo } from "react";
import TextInput from "../../atoms/TextInput/main";

type Props = {
  title: string;
  setTitle: (title: string) => void;
}

const TitleInput = ({ title, setTitle }: Props) => {
  console.log("TitleInput rendering")
  return (
    <>
      <p>Book Title</p>
      <TextInput
        text={title}
        placeholder="本のタイトルを入力"
        setText={setTitle}
      />
    </>
  )
}

export default memo(TitleInput)
