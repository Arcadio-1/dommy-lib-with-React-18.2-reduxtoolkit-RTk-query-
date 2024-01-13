import List from "./List";

const List_skeleton_loading = () => {
  let arr = Array.from(Array(25));
  return (
    <List>
      {arr.map((item, index) => {
        return (
          <div
            className="animate-pulse  h-full bg-bg_2 p-2 rounded-lg"
            key={index}
          >
            <div className="flex flex-col justify-between items-center h-full ">
              <div className="bg-gray-700 py-36 w-full rounded-lg"></div>
              <div className="w-full flex flex-col gap-2 py-2">
                <div className="py-5 bg-gray-700 rounded-lg"></div>
                <div className="py-5 bg-gray-700 rounded-lg"></div>
              </div>
            </div>
          </div>
        );
      })}
    </List>
  );
};

export default List_skeleton_loading;
