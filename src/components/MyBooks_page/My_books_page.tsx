import ListSkeletonLoading from "../util/List/List_skeleton_loading";
import List from "../util/List/List";
import BookCard from "../util/BookCard";
import Button from "../ui/Button";
import Moreicon from "../ui/icons/More_icon";
import Notfound from "../util/Not_found";
import { useFetchAllBooksQuery } from "../../lib/store/features/books_api/books-api-slice";
import { useAppSelector } from "../../lib/store/hooks";
import { selectedBooks } from "../../lib/store/features/list/list-slice";
import { Link } from "react-router-dom";

const My_books_page = () => {
  const { isLoading, isSuccess } = useFetchAllBooksQuery();
  const books = useAppSelector(selectedBooks);
  return (
    <>
      {isLoading ? (
        <ListSkeletonLoading />
      ) : (
        <>
          {isSuccess && books.length ? (
            <List>
              {books.map((book) => {
                return (
                  <BookCard key={book.id} book={book}>
                    <Link to={`/book/${book.id}`}>
                      <Button className="w-full flex items-center justify-center text-xl">
                        <Moreicon />
                        Deatils
                      </Button>
                    </Link>
                  </BookCard>
                );
              })}
            </List>
          ) : (
            <Notfound />
          )}
        </>
      )}
    </>
  );
};

export default My_books_page;
