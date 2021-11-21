import { createContext, useState, ReactNode } from "react";
import { Book } from "../types/book";

type ContextType = {
  bookList: Book[];
  setBookList: (books: Book[]) => void;
}

const contextDefaultValues: ContextType = {
  bookList: [],
  setBookList: () => {},
}

// tsでcontext(グローバルなstate)を設定するために
// 型とdefault値設定が必要
// https://dev.to/shareef/context-api-with-typescript-and-next-js-2m25
export const BookListContext = createContext<ContextType>(contextDefaultValues);

type Props = {
  children: ReactNode;
  books: Book[];
};

//引数で子コンポーネントとgetStaticPropsで取得したデータを代入
const BookListContextProvider = ({ children, books}: Props) => {
  const [bookList, setBookList] = useState(books);

  return (
    <>
      {/* valueで設定した値・関数がグローバルstateとして扱われる */}
      <BookListContext.Provider
        value={{
          bookList,
          setBookList
        }}
      >
        { children }
      </BookListContext.Provider>
    </>
  )
}

export default BookListContextProvider