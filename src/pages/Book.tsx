import { useParams } from "react-router-dom";
import Book from "../components/Book_page/Book";

const Bookpage = () => {
  const param = useParams();
  const { book_id } = param;

  return (
    <section className="flex items-center justify-center mt-5">
      <Book id={book_id} />
    </section>
  );
};

export default Bookpage;
