// import { memo } from "react";

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

// ShowingTextはDetailTempでも使用されているため、一旦memoは使用しない。
// getStaticPaths()でfallbackをtrueにしているページで使用するcomponentに
// memoを設定すると、fallback(SSGされていないページを新しいデータから作る)を行ってくれなくなる。

// export default memo(ShowingText)
export default ShowingText

