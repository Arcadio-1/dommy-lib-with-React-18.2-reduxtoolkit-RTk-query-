import React, { ReactNode } from "react";
import { Book } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../lib/store/hooks";
import { add, remove } from "../../lib/store/features/list/list-slice";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import Button from "../ui/Button";
import CloseIcon from "../ui/icons/Close_icon";
import PlusIcon from "../ui/icons/Plus_icon";

interface BookCardProps extends React.HTMLAttributes<HTMLDivElement> {
  book: Book;
  custom_data?: ReactNode;
  children?: ReactNode;
}

const BookCard = ({
  book: { imageLink, title, id },
  className,
  custom_data,
  children,
  ...props
}: BookCardProps) => {
  const list = useAppSelector((state) => state.list.books);
  const dispatch = useAppDispatch();

  const addHandler = () => {
    dispatch(add(id));
  };
  const removeHandler = () => {
    dispatch(remove(id));
  };

  return (
    <article
      className={cn(" h-full bg-bg_2 p-2 rounded-lg", className)}
      {...props}
    >
      <div className="flex flex-col justify-between items-center h-full ">
        <Link to={`/book/${id}`}>
          <img
            src={`/${imageLink}`}
            alt={title}
            className=""
            width={"150"}
            height={"220"}
            loading="lazy"
          />
        </Link>
        <div className="w-full flex flex-col gap-2 py-2">
          {custom_data ? (
            <>{custom_data}</>
          ) : (
            <h2 className="text-xl text-center">{title}</h2>
          )}
          {list.includes(id) ? (
            <Button
              onClick={removeHandler}
              className="w-full flex items-center justify-center text-xl"
            >
              <CloseIcon />
              Remove
            </Button>
          ) : (
            <Button
              onClick={addHandler}
              className="w-full flex items-center justify-center text-xl"
            >
              <PlusIcon />
              Add
            </Button>
          )}
          {children}
        </div>
      </div>
    </article>
  );
};

export default BookCard;
