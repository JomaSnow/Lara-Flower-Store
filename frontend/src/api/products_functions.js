import api from "../api/index";
import { logout } from "./auth_functions";
import { LARASTORE_USER_TOKEN } from "./localStorageKeys";

export async function getAllProducts() {
  const res = await api.get("/products");
  return res.data;
}

export async function getProductById(id) {
  const res = await api.get(`/products/${id}`);
  return res.data;
}

export async function createProduct(newProduct = {}) {
  const token = localStorage.getItem(LARASTORE_USER_TOKEN);

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
}

export async function updateProduct(id, updatedProduct = {}) {
  const token = localStorage.getItem(LARASTORE_USER_TOKEN);

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
}

export async function deleteProduct(id) {
  const token = localStorage.getItem(LARASTORE_USER_TOKEN);

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
}

export async function searchProduct(query) {
  const res = await api.get(`/products/search/${query}`);

  return res.data;
}
