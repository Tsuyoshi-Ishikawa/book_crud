import { Book } from "../types/book"
import BookListContextProvider from "../context/bookList"
import ListTemp from "../components/templates/List/main"
import { getAllBookData } from "../lib/book"

type Props = {
  staticfilterdBooks: Book[];
}

// 引数にgetStaticPropsで得られたpropsが入る
const Books = ({ staticfilterdBooks }: Props) => {

  return (
    <BookListContextProvider books={staticfilterdBooks}>
      <ListTemp />
    </BookListContextProvider>
  )
}

export default Books

export async function getStaticProps() {
  const staticfilterdBooks = await getAllBookData();

  return {
    props: { staticfilterdBooks },
    revalidate: 3,
  };
}
