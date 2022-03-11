import { useModal } from "../../context/Modal";
import Quotes from "../../assets/img/Quotes.svg";
import * as S from "./ModalBook.styles";
import iconClose from "../../assets/img/iconClose.svg";

export const ModalBook = () => {
  const { book, setShowModal } = useModal();

  return (
    <S.Container>
      <S.Card>
        <S.Image src={book.imageUrl} alt={book.title} />
        <S.Details>
          <S.Title>{book.title}</S.Title>
          <S.Author>{book.authors}</S.Author>
          <p>Informações</p>
          <S.Info>
            <p>Páginas</p>
            <p>{book.pageCount}</p>
          </S.Info>
          <S.Info>
            <p>Editora</p>
            <p>{book.publisher}</p>{" "}
          </S.Info>
          <S.Info>
            <p>Publicação</p>
            <p>{book.published}</p>
          </S.Info>
          <S.Info>
            <p>Idioma</p>
            <p>{book.language}</p>
          </S.Info>
          <S.Info>
            <p>Título Original</p>
            <p>Changed By Design</p>
          </S.Info>
          <S.Info>
            <p>ISBN-10</p>
            <p>{book.isbn10}</p>
          </S.Info>
          <S.Info>
            <p>ISBN-13</p>
            <p>{book.isbn13}</p>
          </S.Info>
          <S.Description>
            <p>Resenha da editora</p>
            <p>
              <img src={Quotes} alt="" />
              {book.description}
            </p>
          </S.Description>
        </S.Details>
      </S.Card>
      <S.Button onClick={() => setShowModal(false)}>
        <img src={iconClose} alt="Close" />
      </S.Button>
    </S.Container>
  );
};
