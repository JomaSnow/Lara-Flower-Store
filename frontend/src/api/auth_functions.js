import api from "../api/index";
import {
  LARASTORE_ADMIN_TOKEN,
  LARASTORE_USER_TOKEN,
} from "./localStorageKeys";

export async function isLogged() {
  const currentToken = localStorage.getItem(LARASTORE_USER_TOKEN);

  return currentToken == null ? false : true;
}

export async function createUser(newUser) {
  try {
    const res = await api.post(`/register`, newUser);

    if (res.status == 201) {
      const token = res.data.token;

      localStorage.setItem(LARASTORE_USER_TOKEN, token);
    }

    return res.data;
  } catch (e) {
    console.error(e);
    if (e.code != null && e.code == "ERR_NETWORK") {
      throw "Sem conexão com o servidor.";
    }
    throw e.response.data.message;
  }
}

export async function userLogin(loginForm) {
  try {
    const res = await api.post(`/login`, loginForm);

    if (res.status == 201) {
      const token = res.data.token;

      localStorage.setItem(LARASTORE_USER_TOKEN, token);
    }

    return res.data;
  } catch (e) {
    console.error(e);
    if (e.code != null && e.code == "ERR_NETWORK") {
      throw "Sem conexão com o servidor.";
    }
    throw e.response.data.message;
  }
}

export async function adminLogin(loginForm) {
  try {
    const res = await api.post(`/login`, loginForm);

    if (res.status == 201 && res.data.user.role == "ADMIN") {
      const token = res.data.token;

      sessionStorage.setItem(LARASTORE_ADMIN_TOKEN, token);
    } else {
      throw "Email ou senha incorretos.";
    }

    return res.data;
  } catch (e) {
    console.error(e);
    if (e.code != null && e.code == "ERR_NETWORK") {
      throw "Sem conexão com o servidor.";
    }
    throw e.response.data.message;
  }
}

export async function logout() {
  const userToken = localStorage.getItem(LARASTORE_USER_TOKEN);
  const adminToken = sessionStorage.getItem(LARASTORE_ADMIN_TOKEN);

  try {
    if (adminToken != null) {
      const adminConfig = {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${adminToken}`,
        },
      };

      const adminRes = await api.post(`/logout`, null, adminConfig);

      sessionStorage.removeItem(LARASTORE_ADMIN_TOKEN);
      localStorage.removeItem(LARASTORE_USER_TOKEN);

      return adminRes.data;
    }

    const userConfig = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };

    const userRes = await api.post(`/logout`, null, userConfig);

    localStorage.removeItem(LARASTORE_USER_TOKEN);

    return userRes.data;
  } catch (e) {
    console.error(e);
    if (e.code != null && e.code == "ERR_NETWORK") {
      throw "Sem conexão com o servidor.";
    }
    if (e.response.status == 401 && (userToken != null || adminToken != null)) {
      sessionStorage.removeItem(LARASTORE_ADMIN_TOKEN);
      localStorage.removeItem(LARASTORE_USER_TOKEN);
      throw "Token inválido.";
    }
    throw e.response.data.message;
  }
}
