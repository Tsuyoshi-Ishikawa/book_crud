import { useState, memo } from "react";
import TextInput from "../../atoms/TextInput/main";

type Props = {
  lastName: string;
  setLastName: (lastName: string) => void;
}

const LastNameInput = ({ lastName, setLastName }: Props) => {
  console.log("LastNameInput rendering")
  return (
    <>
      <p>Last name(author)</p>
      <TextInput
        text={lastName}
        placeholder="著者の名字を入力"
        setText={setLastName}
      />
    </>
  )
}

export default memo(LastNameInput)
