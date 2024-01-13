export interface Book {
  id: string;
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
}
export enum Paths {
  home = "/",
  my_books = "/myBooks",
  book = "book",
}
