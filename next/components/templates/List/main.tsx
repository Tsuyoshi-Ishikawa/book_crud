import Head from 'next/head'
import Header from '../../organisms/Header/main'
import HeadLine from '../../atoms/HeadLine/main'
import BookList from '../../organisms/BookList/main'

const ListTemp = () => {
  return (
    <div>
      <Head>
        <title>book list</title>
        <meta name="description" content="favorite book list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <HeadLine text="BOOK LIST" />
        <BookList />
      </main>
    </div>
  )
}

export default ListTemp
