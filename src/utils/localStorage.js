export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  let user = null;
  try {
    user = result ? JSON.parse(result) : null;
  } catch (err) {}
  return user;
};
