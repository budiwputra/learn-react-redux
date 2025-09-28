// productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getProducts, addProduct, updateProduct, deleteProduct } from "../services/api/product"

// async thunk
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  return await getProducts()
})

export const createProduct = createAsyncThunk("products/add", async (payload) => {
  return await addProduct(payload)
})

export const editProduct = createAsyncThunk("products/edit", async ({ id, payload }) => {
  return await updateProduct(id, payload)
})

export const removeProduct = createAsyncThunk("products/delete", async (id) => {
  await deleteProduct(id)
  return id
})

export const productSlice = createSlice({
  name: "products",
  initialState: {
    value : []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.value = action.payload
        })
        .addCase(createProduct.fulfilled, (state, action) => {
            state.value.push(action.payload)
        })
        .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.value.findIndex((item) => item.id === action.payload.id)
        if (index !== -1) {
            // kalau API return object penuh, hasil sama
            // kalau cuma partial, hasil juga tetap benar
            state.value[index] = { ...state.value[index], ...action.payload }
        }
        })
        .addCase(removeProduct.fulfilled, (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload)
        })
  },
})

export default productSlice.reducer
