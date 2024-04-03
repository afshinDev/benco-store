import { createContext, useContext } from "react";

const ListContext = createContext();

function List({ children, columns }) {
  return (
    <ListContext.Provider value={{ columns }}>{children}</ListContext.Provider>
  );
}

function Body({ data, render }) {
  return <div className="row">{data?.map?.(render)}</div>;
}

function Item({ children }) {
  const { columns } = useContext(ListContext);

  return <div className={`${columns}`}>{children}</div>;
}

List.Body = Body;
List.Item = Item;

export default List;
