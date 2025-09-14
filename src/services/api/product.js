import api from "./client";

// GET /tasks
export const getProducts = (params) =>
  api.get("/products", { params }).then((r) => r.data);

// GET /tasks/:id
export const getProduct = (id) =>
  api.get(`/products/${id}`).then((r) => r.data);

// POST /tasks
export const addProduct = (payload) =>
  api.post("/products", payload).then((r) => r.data);

// PUT /tasks/:id (bisa juga PATCH, MockAPI mendukung)
export const updateProduct = (id, payload) =>
  api.put(`/products/${id}`, payload).then((r) => r.data);

// DELETE /tasks/:id
export const deleteProduct = (id) =>
  api.delete(`/products/${id}`).then((r) => r.data);