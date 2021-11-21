export type Author = {
  firstname: string;
  lastname: string;
}

export type Book = {
  id: string;
  title: string;
  author: Author;
}
