import { useBooks } from "../../hooks/useBooks";
import { useAuth } from "../../context/Auth";
import { useModal } from "../../context/Modal";
import { ModalBook } from "../../components/ModalBook";
import Book from "../../components/Book";

import brandSecondary from "../../assets/img/brandSecondary.svg";
import iconLogout from "../../assets/img/iconLogout.svg";
import Next from "../../assets/img/Next.svg";

import * as S from "./Home.styles";

const Home = () => {
  const { data, nextPage, previousPage, page, totalPages } = useBooks();
  const { signOut } = useAuth();
  const { showModal } = useModal();

  const username = localStorage.getItem("username");
  const gender = localStorage.getItem("gender");

  return (
    <>
      <S.Container>
        <S.Header>
          <img src={brandSecondary} alt="Ioasys" />
          <S.HeaderAction>
            <S.Welcome>
              {gender === "M" ? "Bem vindo" : "Bem vinda"},{" "}
              <strong>{username}</strong> !
            </S.Welcome>
            <button onClick={() => signOut()}>
              <img src={iconLogout} alt="Logout" />
            </button>
          </S.HeaderAction>
        </S.Header>
        <Book data={data} />
        <S.Footer>
          <S.Page>
            Página <strong>{page}</strong> de{" "}
            <strong>{Math.round(totalPages)}</strong>
          </S.Page>

          <S.Button disabled={page <= 1} onClick={() => previousPage()}>
            <img src={Next} alt="Previous" />
          </S.Button>
          <S.Button disabled={page >= totalPages} onClick={() => nextPage()}>
            <img src={Next} alt="Next" />
          </S.Button>
        </S.Footer>
        {showModal && <ModalBook />}
      </S.Container>
    </>
  );
};

export default Home;
