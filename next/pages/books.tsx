import { useEffect } from "react"
import useSWR from "swr"
import { Book } from "../types/book"
import ListTemp from "../components/templates/List/main"
import { getAllBookData } from "../lib/book"

type Props = {
  staticfilterdBooks: Book[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const apiUrl = `${process.env.NEXT_PUBLIC_RESTAPI_URL}/books`;

// 引数にgetStaticPropsで得られたpropsが入る
const Books = ({ staticfilterdBooks }: Props) => {
  // const { data: books, mutate } = useSWR(apiUrl, fetcher, {
  //   fallbackData: staticfilterdBooks, //初期データセット
  // });

  // useEffect(() => {
  //   mutate();
  // }, []);

  return (
    // <ListTemp books={books}/>
    <ListTemp books={staticfilterdBooks}/>
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
