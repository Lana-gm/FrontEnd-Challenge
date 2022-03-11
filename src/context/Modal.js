import { createContext, useContext, useState } from "react";
import api from "../services";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [book, setBook] = useState({});
  const [showModal, setShowModal] = useState(false);

  const token = localStorage.getItem("token");

  const selectBook = (id) => {
    api({
      method: "get",
      url: `https://books.ioasys.com.br/api/v1/books/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => setBook(res.data));
  };

  return (
    <ModalContext.Provider
      value={{ selectBook, book, showModal, setShowModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
