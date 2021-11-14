import { useState } from "react";
import TitleInput from "../../molecules/TitleInput/main";
import FirstNameInput from "../../molecules/FirstNameInput/main";
import LastNameInput from "../../molecules/LastNameInput/main";
import BaseBtn from "../../atoms/BaseBtn/main";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <form >
        <TitleInput title={title} setTitle={setTitle}/>
        <FirstNameInput firstName={firstName} setFirstName={setFirstName}/>
        <LastNameInput lastName={lastName} setLastName={setLastName}/>
        <BaseBtn buttonType="submit" buttonText="作成"/>
      </form>
    </>
  )
}

export default BookCreate
