// import { memo } from "react";
import { Book } from "../../../types/book"
import ShowingText from "../../atoms/ShowingText/main"

type Props = {
  book: Book;
}

const BookDetail = ({ book }: Props) => {
  return (
    <>
      <ShowingText title="book title" text={ book.title }/>
      <ShowingText title="author name" text={ book.author.firstname + book.author.lastname }/>
    </>
  )
}

// BookDetailはDetailTempでも使用されているため、一旦memoは使用しない。
// getStaticPaths()でfallbackをtrueにしているページで使用するcomponentに
// memoを設定すると、fallback(SSGされていないページを新しいデータから作る)を行ってくれなくなる。

// export default memo(BookDetail)
export default BookDetail
