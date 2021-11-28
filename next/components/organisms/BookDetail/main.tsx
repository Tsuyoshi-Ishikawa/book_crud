import { memo } from "react";
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

export default memo(BookDetail)
