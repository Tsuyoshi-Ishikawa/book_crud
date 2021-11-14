type Props = {
  text: string;
}

const HeadLine = ({ text }: Props) => {
  return (
    <>
      <h1 className="border-solid">{ text }</h1>
    </>
  )
}

export default HeadLine
