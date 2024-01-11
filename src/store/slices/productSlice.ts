import { URL } from "@/constants/";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ApiError {
  message: string;
  error: string;
  statusCode: number;
}

interface ProductItem {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
}

interface ProductState {
  productsAll: ProductItem[];
  favirites: ProductItem[];
  loading: boolean;
  error: null | ApiError;
}

const initialState: ProductState = {
  productsAll: [],
  favirites: [],
  loading: false,
  error: null,
};

export const products = createAsyncThunk(
  "@@/products",
  async (_, { rejectWithValue }) => {
    const res = await fetch(URL.products);
    const data = await res.json();
    if (!res.ok) {
      return rejectWithValue(data);
    }
    return data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: (state) => {
      state.favirites = [];
    },
    addProduct: (state, action) => {
      state.favirites.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.favirites = state.favirites.filter(
        (product) => product.id !== action.payload
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(products.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(products.fulfilled, (state, action) => {
        state.productsAll = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(products.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as ApiError;
      });
  },
});


export const {  addProduct, removeProduct, reset } = productsSlice.actions;
export default productsSlice.reducer;
