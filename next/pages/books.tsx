import { useEffect } from "react"
import useSWR from "swr"
import { Book } from "../types/book"
import BookListContextProvider from "../context/bookList"
import ListTemp from "../components/templates/List/main"
import { getAllBookData } from "../lib/book"

type Props = {
  staticfilterdBooks: Book[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const apiUrl = `${process.env.NEXT_PUBLIC_RESTAPI_URL}/books`;

// 引数にgetStaticPropsで得られたpropsが入る
const Books = ({ staticfilterdBooks }: Props) => {
  const { data: books, mutate } = useSWR(apiUrl, fetcher, {
    fallbackData: staticfilterdBooks, //初期データセット
    refreshInterval: 3000 //更新のタイミングを設定
  });

  useEffect(() => {
    console.log('swr effect');
    fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/books`).then((res) => console.log(res.json())) //ここで最新データは取れているが
    mutate(apiUrl);
    console.log(books); // booksに最新に入れたデータが登録されていない、これが原因
  }, []);

  return (
    // <BookListContextProvider books={staticfilterdBooks}>
    <BookListContextProvider books={books}>
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
