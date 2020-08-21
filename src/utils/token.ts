type Token = (string | undefined)
type Uname = (string | undefined)

export const getToken = (): Token => localStorage.getItem('token') || undefined;

export const setToken = (token: Token): void => {
  localStorage.setItem('token', token as string);
};

export const resetToken = (): void => {
  localStorage.removeItem('token');
};
export const setUserName = (uname: Uname): void => {
  localStorage.setItem('uname', uname as string);
}
export const getUserName = (): Uname => localStorage.getItem('uname') || undefined;

