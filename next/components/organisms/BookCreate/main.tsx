import { useState } from "react";
import { useRouter } from "next/router";
import TitleInput from "../../molecules/TitleInput/main";
import FirstNameInput from "../../molecules/FirstNameInput/main";
import LastNameInput from "../../molecules/LastNameInput/main";
import BaseBtn from "../../atoms/BaseBtn/main";

const BookCreate = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const postBook = async (e: any) => {
    e.preventDefault();
    try {
      await fetch(
        // このfetchはブラウザで動くので、localhostが名前解決できるので、localhost設定してOK
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}/books`,
        {
          method: "POST",
          body: JSON.stringify({ title: title, author: {firstname: firstName, lastname: lastName} }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.status != 200) {
          throw "not successful";
        } 
      })
      router.push("/books");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <form onSubmit={postBook}>
        <TitleInput title={title} setTitle={setTitle}/>
        <FirstNameInput firstName={firstName} setFirstName={setFirstName}/>
        <LastNameInput lastName={lastName} setLastName={setLastName}/>
        <BaseBtn buttonType="submit" buttonText="作成"/>
      </form>
    </>
  )
}

export default BookCreate
