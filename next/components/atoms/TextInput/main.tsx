type Props = {
  text: string;
  placeholder: string;
  setText: (text: string) => void;
}

const TextInput = ({ text, placeholder, setText }: Props) => {
  return (
    <>
      <input type="text"
        placeholder={placeholder}
        value={text}
        onChange={(e) => {
            setText(e.target.value);
        }}
      />
    </>
  )
}

export default TextInput
