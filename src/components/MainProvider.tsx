import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../lib/store/store";

const MainProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default MainProvider;
