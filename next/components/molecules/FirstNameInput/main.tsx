import { useState, memo } from "react";
import TextInput from "../../atoms/TextInput/main";

type Props = {
  firstName: string;
  setFirstName: (firstName: string) => void;
}

const FirstNameInput = ({ firstName, setFirstName }: Props) => {
  console.log("FirstNameInput rendering")
  return (
    <>
      <p>First name(author)</p>
      <TextInput
        text={firstName}
        placeholder="著者の名前を入力"
        setText={setFirstName}
      />
    </>
  )
}

export default memo(FirstNameInput)
