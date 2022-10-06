import { useContext, useEffect, useState } from "react";
import { TodoListContext } from "../../context/TodoListContext";

// Custom hook
export const useTodoItemList = (status) => {
  // `use` prefix
  const { data } = useContext(TodoListContext);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    // Cho truong hop all
    if (!status) {
      setCurrentData(data);
      return;
    }

    // filter theo status cua moi trang
    const filterList = data.filter((item) => item?.status === status);
    setCurrentData(filterList);
  }, [data, status]);

  return {
    currentData,
  };
};

export const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const jumpPage = (nextPage) => {
    if (nextPage === currentPage) return;

    setCurrentPage(nextPage);
  };

  const currentData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const dataPerPage = data.slice(startIndex, endIndex);
    return dataPerPage;
  };

  return {
    jumpPage,
    dataPerPage: currentData(),
    currentPage,
    maxPage,
  };
};
