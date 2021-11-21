export async function getAllBookData() {
  const staticfilterdBooks = await fetch(
    // NEXT_PUBLIC_RESTAPI_URLではlocalhostが設定されており、コンテナ内でlocalhostが名前解決できない
    // NEXT_PUBLIC_SSG_URLではdomainにコンテナ名を設定
    `${process.env.NEXT_PUBLIC_SSG_URL}/books`
  ).then((res) => res.json());
  return staticfilterdBooks;
}
