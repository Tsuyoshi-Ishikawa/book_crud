import ListSelection from "../../molecules/ListSelection/main";

const BookList = () => {
  // dummy data
  const books = [
    {
      "id": "1",
      "title": "Book one",
      "author": {
      "firstname": "Philip",
      "lastname": "Williams"
      }
    },
    {
      "id": "2",
      "title": "Book Two",
      "author": {
      "firstname": "John",
      "lastname": "Johnson"
      }
    }
  ]

  return (
    <>
      {books.map((book) => {
        return <ListSelection
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
