import { memo } from "react";
import { Book } from "../../../types/book";
import ListSelection from "../../molecules/ListSelection/main";

type Props = {
  books: Book[]
}

const BookList = ({ books }: Props) => {
  // useSWRつかうとここが３回呼ばれて、booksがstringになっている、localhostみたいな値が入っている

  return (
    <>
      {/* mapを使用する場合は要素にkeyを設定する必要あり
      */}
      {books.map((book) => {
        return <ListSelection
          key={book.id}
          title={book.title}
          firstName={book.author.firstname}
          lastName={book.author.lastname}
          href={`/books/${book.id}`}
        />
      })}
    </>
  )
}

export default memo(BookList)
