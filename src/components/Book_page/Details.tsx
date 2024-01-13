import React from "react";
import { Book } from "../../types/types";

interface Book_detail {
  label: string;
  value: string;
}
interface Props {
  book: Book;
}
const Details = ({ book }: Props) => {
  const book_details: Array<Book_detail> = [
    { label: "full title", value: book.title },
    book.author
      ? { label: "auther", value: book.author }
      : { label: "auther", value: "unknow" },
    book.country
      ? { label: "from", value: book.country }
      : { label: "auther", value: "unknow" },
    book.language
      ? { label: "language", value: book.language }
      : { label: "auther", value: "unknow" },
    book.pages
      ? { label: "total pages", value: book.pages.toString() }
      : { label: "auther", value: "unknow" },
    book.year
      ? { label: "published", value: book.year.toString() }
      : { label: "auther", value: "unknow" },
  ];

  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-xl text-dark_4 border-b-2 border-first pb-1">
        {book.title}
      </h2>
      <div className="w-full">
        <div className="flex flex-col gap-2 ">
          {book_details.map((item, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-1 xs:grid-cols-3 items-center border-b border-first border-opacity-20"
              >
                <span className="capitalize text-lg text-second_text_color text-nowrap">
                  {`${item.label} :`}
                </span>
                <span
                  className=" pl-1 col-span-2 text-center xs:text-left text-lg text-wrap"
                  style={{ wordBreak: "break-word" }}
                >
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
