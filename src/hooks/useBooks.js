import { useState, useEffect } from "react";
import api from "../services";

export const useBooks = () => {
  const [response, setResponse] = useState({});
  const [pageCount, setPageCount] = useState(1);

  const token = localStorage.getItem("token");

  const nextPage = () => {
    setPageCount((state) => state + 1);
  };

  const previousPage = () => {
    setPageCount((state) => state - 1);
  };

  useEffect(() => {
    if (token) {
      api({
        method: "get",
        url: `books?page=${pageCount}&amount=12`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setResponse({
          data: res?.data?.data,
          page: res?.data?.page,
          totalItems: res?.data?.totalItems,
          totalPages: res?.data?.totalPages,
          nextPage,
          previousPage,
        });
      });
    }
  }, [pageCount, token]);

  return response;
};
