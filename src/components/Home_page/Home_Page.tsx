import ListSkeletonZLoading from "../util/List/List_skeleton_loading";
import List from "../util/List/List";
import BookCard from "../util/BookCard";
import Button from "../ui/Button";
import Moreicon from "../ui/icons/More_icon";
import Notfound from "../util/Not_found";
import {
  allFilterdBooks,
  useFetchAllBooksQuery,
} from "../../lib/store/features/books_api/books-api-slice";
import { useAppSelector } from "../../lib/store/hooks";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { isLoading, isSuccess } = useFetchAllBooksQuery();
  const books = useAppSelector(allFilterdBooks);
  return (
    <>
      {isLoading ? (
        <ListSkeletonZLoading />
      ) : (
        <>
          {books.length && isSuccess ? (
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

export default HomePage;
