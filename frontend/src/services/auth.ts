interface signInProps {
  email: string;
  password: string;
}
interface Response {
  token: string | null;
  message: string;
  profileType: string | undefined;
}

export function signIn({ email, password }: signInProps): Promise<Response> {
  let profileType: string | undefined = undefined;

  let isValid = false;
  if (email === 'kaiky@gmail.com' && password === '123') {
    isValid = true;
    profileType = "proprietario";
  } else if (email === 'lucas@gmail.com' && password === '123') {
    isValid = true;
    profileType = "cuidador";
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        isValid
          ? {
              token: 'gr98wsh97fha937gahw9fha39',
              message: 'success',
              profileType,
            }
          : {
              token: null,
              message: 'Usuário inválido!',
              profileType,
            },
      );
    }, 500);
  });
}