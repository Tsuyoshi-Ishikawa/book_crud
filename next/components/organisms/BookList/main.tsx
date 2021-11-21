import {useContext} from 'react'
import { BookListContext } from '../../../context/bookList';
import ListSelection from "../../molecules/ListSelection/main";

const BookList = () => {
  // contextで作成したグローバルなstateを取得する
  const { bookList } = useContext(BookListContext)

  return (
    <>
      {/* mapを使用する場合は要素にkeyを設定する必要あり
      https://sentry.io/answers/unique-key-prop/
      https://qiita.com/koba04/items/a4d23245d246c53cd49d
      */}
      {bookList.map((book) => {
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

export default BookList
