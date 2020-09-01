export const getIsLoggedIn = () =>
  localStorage.getItem("IS_LOGGED_IN") === "true";

export const authServiceLogOut = (e) => {
  localStorage.setItem("IS_LOGGED_IN", "false");
  window.open("/", "_self");
};

export const authServiceLogIn = (login, password) => {
  console.log(login, password);
  localStorage.setItem("IS_LOGGED_IN", "true");
  window.open("/", "_self");
};
