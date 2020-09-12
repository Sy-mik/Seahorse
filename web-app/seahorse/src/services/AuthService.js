import axios from "axios";

export const getIsLoggedIn = () =>
  localStorage.getItem("IS_LOGGED_IN") === "true";

export const authServiceLogOut = (e) => {
  localStorage.setItem("IS_LOGGED_IN", "false");
  window.open("/", "_self");
};

export const authServiceLogIn = (login, password) => {
  localStorage.setItem("IS_LOGGED_IN", "true");
  axios({
    method: "post",
    url: "/auth/signin",
    data: { login, password },
  })
    .then(function (response) {
      console.log(response);
      window.open("/", "_self");
    })
    .catch((error) => {});
};
