import TextInput from "../../atoms/TextInput/main";

type Props = {
  title: string;
  setTitle: (title: string) => void;
}

const TitleInput = ({ title, setTitle }: Props) => {
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

export default TitleInput
