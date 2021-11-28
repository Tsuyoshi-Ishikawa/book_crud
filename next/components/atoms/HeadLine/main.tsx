// import { memo } from "react";

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

// HeadLineはDetailTempでも使用されているため、一旦memoは使用しない。
// getStaticPaths()でfallbackをtrueにしているページで使用するcomponentに
// memoを設定すると、fallback(SSGされていないページを新しいデータから作る)を行ってくれなくなる。

// export default memo(HeadLine)
export default HeadLine
