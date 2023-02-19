import api from "../api/index";
import { logout } from "./auth_functions";
import { LARASTORE_USER_TOKEN } from "./localStorageKeys";

export async function getAllProducts() {
  try {
    const res = await api.get("/products");
    return res.data;
  } catch (e) {
    console.error(e);
    if (e.code != null && e.code == "ERR_NETWORK") {
      throw "Sem conexão com o servidor.";
    }
    throw e.response.data.message;
  }
}

export async function getProductById(id) {
  try {
    const res = await api.get(`/products/${id}`);
    return res.data;
  } catch (e) {
    console.error(e);
    if (e.code != null && e.code == "ERR_NETWORK") {
      throw "Sem conexão com o servidor.";
    }
    throw e.response.data.message;
  }
}

// ainda precisa implementar o s3 para as n imagens. Talvez no back?
export async function createProduct(newProduct) {
  const token = localStorage.getItem(LARASTORE_USER_TOKEN);

  try {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await api.post(`/products`, newProduct, config);

    if (token != null && res.status == 401) {
      logout();
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

export async function updateProduct(id, updatedProduct = {}) {
  const token = localStorage.getItem(LARASTORE_USER_TOKEN);

  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    // se create estiver funcionando e update não, verificar se é pq
    // o config sobrescreve o Headers e apaga o accept padrão
    const res = await api.put(`/products/${id}`, updatedProduct, config);

    if (token != null && res.status == 401) {
      logout();
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

export async function deleteProduct(id) {
  const token = localStorage.getItem(LARASTORE_USER_TOKEN);

  try {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await api.delete(`/products/${id}`, config);

    if (token != null && res.status == 401) {
      logout();
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

export async function searchProduct(query) {
  try {
    const res = await api.get(`/products/search/${query}`);

    return res.data;
  } catch (e) {
    console.error(e);
    if (e.code != null && e.code == "ERR_NETWORK") {
      throw "Sem conexão com o servidor.";
    }
    throw e.response.data.message;
  }
}
