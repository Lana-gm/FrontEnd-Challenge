import { useForm } from "react-hook-form";
import { useAuth } from "../../context/Auth";

import brandPrimary from "../../assets/img/brandPrimary.svg";

import * as S from "./Login.styles";

const Login = () => {
  const { signIn, error } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data);
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <img src={brandPrimary} alt="Ioasys" />
        <S.InputBox>
          <S.Label>Email</S.Label>
          <S.Input
            type="email"
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
        </S.InputBox>

        <S.InputBox>
          <S.Label>Senha</S.Label>
          <S.Input
            type="password"
            {...register("password", {
              required: "Required",
            })}
          />
          <S.Button type="submit">Entrar</S.Button>
        </S.InputBox>
        {(errors.email || errors.password || error) && (
          <S.Error>Email e/ou senha incorretos.</S.Error>
        )}
      </S.Form>
    </S.Container>
  );
};

export default Login;
