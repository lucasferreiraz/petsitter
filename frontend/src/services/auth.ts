interface signInProps {
  email: string;
  password: string;
}
interface Response {
  token: string | null;
  message: string;
}

export function signIn({ email, password }: signInProps): Promise<Response> {
  const isValid = email === 'pet@email.com' && password === '123';

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        isValid
          ? {
              token: 'gr98wsh97fha937gahw9fha39',
              message: 'success',
            }
          : {
              token: null,
              message: 'Usuário inválido!',
            },
      );
    }, 500);
  });
}