import Head from 'next/head'
import { Book } from "../../../types/book"
import Header from '../../organisms/Header/main'
import HeadLine from '../../atoms/HeadLine/main'
import BookDetail from "../../organisms/BookDetail/main"

type Props = {
  book: Book;
}

const DetailTemp = ({ book }: Props) => {
  return (
    <div>
      <Head>
        <title>book detail</title>
        <meta name="description" content="favorite book detail" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <HeadLine text="BOOK Detail" />
        <BookDetail book={book}/>
      </main>
    </div>
  )
}

export default DetailTemp
