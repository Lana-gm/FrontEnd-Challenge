import { useModal } from "../../context/Modal";
import * as S from "./Book.styles";

const Book = ({ data }) => {
  const { selectBook, setShowModal } = useModal();

  const handleClick = (id) => {
    selectBook(id);
    setShowModal(true);
  };

  return (
    <S.Card>
      {data?.map((book, index) => (
        <S.CardItem key={index} onClick={() => handleClick(book.id)}>
          <S.Image src={book.imageUrl} alt={book.title} />
          <S.Description>
            <S.Title>{book.title}</S.Title>
            <S.Author>{book.authors}</S.Author>
            <S.Info>{book.pageCount} páginas</S.Info>
            <S.Info>Editora {book.publisher}</S.Info>
            <S.Info>Publicado em {book.published}</S.Info>
          </S.Description>
        </S.CardItem>
      ))}
    </S.Card>
  );
};

export default Book;
