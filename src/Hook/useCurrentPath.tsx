import { useEffect, useState } from "react";
import { Paths } from "../types/types";
import { useLocation } from "react-router-dom";

const useCurrentPath = () => {
  const [currentPath, setCurrentPath] = useState<Paths | null>(null);
  const path = useLocation();

  useEffect(() => {
    setCurrentPath(() => {
      switch (path.pathname) {
        case Paths.home:
          return Paths.home;
        case Paths.my_books:
          return Paths.my_books;
        case Paths.book:
          return Paths.book;
        default:
          return null;
      }
    });
  }, [path.pathname]);

  return { currentPath };
};

export default useCurrentPath;
