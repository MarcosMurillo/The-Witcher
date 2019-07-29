export const login = (user, password) => {
  if (user === '' || password === '') {
    return false;
  }
  localStorage.setItem('authenticated', 'true');
  return true;
};
export const logout = () => localStorage.removeItem('authenticated');
