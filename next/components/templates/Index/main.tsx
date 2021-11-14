import Head from 'next/head'
import Header from '../../organisms/Header/main'
import HeadLine from '../../atoms/HeadLine/main'
import BookCreate from '../../organisms/BookCreate/main'

const IndexTemp = () => {
  return (
    <div>
      <Head>
        <title>book register</title>
        <meta name="description" content="register favorite book" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <HeadLine text="BOOK REGISTER" />
        <BookCreate />
      </main>
    </div>
  )
}

export default IndexTemp
