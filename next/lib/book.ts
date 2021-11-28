import { Book } from "../types/book";

export async function getAllBookData() {
  const staticfilterdBooks = await fetch(
    // NEXT_PUBLIC_RESTAPI_URLではlocalhostが設定されており、コンテナ内でlocalhostが名前解決できない
    // NEXT_PUBLIC_SSG_URLではdomainにコンテナ名を設定
    `${process.env.NEXT_PUBLIC_SSG_URL}/books`,
    {cache: "no-store"}
  ).then((res) => res.json());
  return staticfilterdBooks;
}


// 本の詳細ページのroutingを作成するために必要
export async function getAllBookIds() {
  const books = await fetch(
    // NEXT_PUBLIC_RESTAPI_URLではlocalhostが設定されており、コンテナ内でlocalhostが名前解決できない
    // NEXT_PUBLIC_SSG_URLではdomainにコンテナ名を設定
    `${process.env.NEXT_PUBLIC_SSG_URL}/books`,
    {cache: "no-store"}
  ).then((res) => res.json());
  return books.map((book: Book) => {
    return {
      params: {
        id: String(book.id),
      },
    };
  });
}

export async function getBookData(id: string) {
  const book = await fetch(
    // NEXT_PUBLIC_RESTAPI_URLではlocalhostが設定されており、コンテナ内でlocalhostが名前解決できない
    // NEXT_PUBLIC_SSG_URLではdomainにコンテナ名を設定
    `${process.env.NEXT_PUBLIC_SSG_URL}/books/${id}`,
    {cache: "no-store"}
  ).then((res) => res.json());
  return book;
}
