import Details from "./Details";
import { useFetchBookQuery } from "../../lib/store/features/books_api/books-api-slice";
import BookCard from "../util/BookCard";
import Notfound from "../util/Not_found";
import Button from "../ui/Button";
import Backicon from "../ui/icons/Back_icon";
import { Link } from "react-router-dom";

interface IBook {
  id: string | undefined;
}

const Book = ({ id = "" }: IBook) => {
  const { data: book, isLoading, isSuccess } = useFetchBookQuery(id);
  return (
    <div className="w-full flex justify-center">
      {isLoading ? (
        <h1 className="text-lg text-first_text_color">Loading</h1>
      ) : (
        <>
          {isSuccess ? (
            <BookCard
              className="max-w-80 grow"
              book={book}
              custom_data={<Details book={book} />}
            >
              <Link to={`/`}>
                <Button className="w-full flex items-center justify-center text-xl">
                  <Backicon />
                  Home
                </Button>
              </Link>
            </BookCard>
          ) : (
            <Notfound />
          )}
        </>
      )}
    </div>
  );
};

export default Book;
